const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("./index", {
    title: "Pug",
  });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/secondpg", function (req, res) {
  const username = req.body.username;
  let userLogin = login(username, req.body.password);
  if (userLogin) {
    res.render("/secondpg");
  } else {
    res.render("index", { error: true });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
