const bcrypt = require("bcrypt");

const plainTextPassword = "admin";

const hashedValues = [
  "$2b$10$wormlX0ENSX63Kp0zl9nlOWMaKTFo39yOfe4XdkhcxeXksHncj8o6",
  "$2b$10$Aoq4tZ6IpTWBfaRWE/0gue896QnyDRccqMYAGnNCm7HgL72e.FjWO",
  "$2b$10$CWv27v9adjc2MHAQJfTWW.6fglYO7ne9CT0AV5YCrEBWZkBJ5zaES",
  "$2b$10$xxwEa9/VtNZ.nAVyWze7SunKsbFAB9jDPImU5DHFY3mtKfgD3edk.",
  "$2b$10$ea4VUmI5ELqysXa6TC0AA.MtVN.RKgA04N1GMf7tcc0eYavMmXNJi",
];

async function generateHash() {
  const passwordHash = await bcrypt.hash(plainTextPassword, 10); // 2nd parameter is the salt

  const compare = await bcrypt.compare(plainTextPassword, passwordHash);

  console.log(
    plainTextPassword,
    passwordHash,
    compare ? "---Matching---" : "---Not Matching---"
  );
}

generateHash();

async function compareHashValues() {
  for (let index = 0; index < hashedValues.length; index++) {
    const element = hashedValues[index];

    const result = await bcrypt.compare(plainTextPassword, element);

    console.log(result);
  }
}

compareHashValues();
