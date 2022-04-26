var http = require("http");

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  }).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');