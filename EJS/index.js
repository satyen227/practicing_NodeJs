const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/insta/:username", (req, res) => {
  let { username } = req.params;
  res.render("insta.ejs", { username });
});
app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceValue });
});

app.listen(port, () => {
  console.log(`Server Listening at port ${port}`);
});
