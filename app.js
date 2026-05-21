const http = require('http');

http.createServer((req, res) => {
  res.write('CodePipeline Deployment Success');
  res.end();
}).listen(3000);

console.log("Running on port 3000");
