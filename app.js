const express = require("express");
const port = 3000;
const app = express();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("index", {
    title: "Pug",
  });
});

const url = `https://api.api-ninjas.com/v1/randomword`;
const generateWord = {
  method: "GET",
  headers: {
    "X-Api-Key": "4oizHQmbKbbQVNBZoHENP5tGR5mgpaIAucOaRp2T",
  },
};

fetch(url, generateWord)
  .then((res) => res.json())
  .then((data) => {
    let word = data.word.toString();
    console.log(word);

    app.get("/secondpg", function (req, res) {
      res.render("secondpg", {
        location: "Bali",
        year: "2024",
        word: word,
        description:
          "Bonbon cotton candy brownie sweet roll jelly beans shortbread. Lollipop brownie pastry cheesecake macaroon.",
      });
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
