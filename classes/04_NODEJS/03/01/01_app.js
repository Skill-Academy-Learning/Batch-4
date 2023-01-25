const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Hello World!!!</h1>");

    res.end();
  } else if (req.url === "/about-us") {
    res.write("<h1>About Us</h1>");

    res.end();
  } else {
    res.write("<h1 style='color:red'>Page not found</h1>");

    res.end();
  }
});

server.listen(8080);
