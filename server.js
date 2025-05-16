const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello, Suvayan!</h1>");
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
