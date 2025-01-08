const express = require("express");
const app = express();
// console.log(app);
const port = 3000;
app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});

// app.use((req, res) => {
//   //console.log("Request Recived");
//   let code = "<h1>Friuts</h1> <ul><li>Apple</li><li>Mango</li></ul>";
//   //   res.send("Hey there how are you ,i am killua thanks for connecting");
//   res.send(code);
// });

app.get("/", (req, res) => {
  res.send("You are seeing main page");
});
app.get("/help", (req, res) => {
  res.send("You are seeing Help Page , HOW CAN I HELP YOU !!");
});
app.get("/search", (req, res) => {
  res.send("you are seeing search page");
});
app.get("*", (req, res) => {
  res.send("The page you are looking for does not exist");
});
app.post("/", (req, res) => {
  res.send("sending post request");
});
