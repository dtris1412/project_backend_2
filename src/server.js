const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
//Config
require("dotenv").config();

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
//Static file
app.use(express.static(path.join(__dirname, "public")));
//route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/abc", (req, res) => {
  res.render("sample.ejs");
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
