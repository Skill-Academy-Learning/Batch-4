const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const { users } = require("./database");

//Google strategy configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return cb(err, user);
      //   });

      const email = profile?.emails[0]?.value;
      const fullName = profile?.displayName;

      const userExists = users.some((user) => {
        return user.email === email;
      });

      if (!userExists) {
        return cb(new Error("No such user in the System"), null);
      }

      return cb(null, { email, fullName });
    }
  )
);

// JWT strategy configuration
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    const email = jwt_payload?.email;
    const fullName = jwt_payload?.fullName;

    const userExists = users.some((user) => {
      return user.email === email;
    });

    if (!userExists) {
      return done(new Error("No such user in the System"), false);
    }

    return done(null, { email, fullName });

    // User.findOne({id: jwt_payload.sub}, function(err, user) {
    //     if (err) {
    //         return done(err, false);
    //     }
    //     if (user) {
    //         return done(null, user);
    //     } else {
    //         return done(null, false);
    //         // or you could create a new account
    //     }
    // });
  })
);
