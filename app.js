const express = require("express");
const app = express();
const port = 3333;


app.use(function(req, res, next) {
  console.log("Requisição " + req.method + " " + req.url);
  next();
 });
 app.use(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world!");
 });
 app.listen(port, function() {
  console.log(`Express app iniciada na porta ${port}.`);
 });