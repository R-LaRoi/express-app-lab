const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render(
    "./index",
    {
      title: "Pug",
    },
    { error: false }
  );
});

app.use(bodyParser.urlencoded({ extended: true }));

router.get("/about", (req, res) => {
  res.render("./about", { title: "Pug Two" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
