const express = require("express");
const app = express();
// console.log(app);
const port = 3000;
app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});

//path parameters

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Welcome @${username} your id is ${id}`);
});

/*
// response


app.use((req, res) => {
  //console.log("Request Recived");
  let code = "<h1>Friuts</h1> <ul><li>Apple</li><li>Mango</li></ul>";
  //   res.send("Hey there how are you ,i am killua thanks for connecting");
  res.send(code);
});

// Routing 
app.get("/", (req, res) => {
  res.send("You are seeing main page");
});
app.get("/help", (req, res) => {
  res.send("You are seeing Help Page , HOW CAN I HELP YOU !!");
});
app.get("/search", (req, res) => {
  res.send("you are seeing search page");
});
app.get("/shop", (req, res) => {
  res.send("Welcome to Shop Page , What do You like to Buy");
});
app.get("*", (req, res) => {
  res.send("The page you are looking for does not exist");
});
app.post("/", (req, res) => {
  res.send("sending post request");
});
*/
