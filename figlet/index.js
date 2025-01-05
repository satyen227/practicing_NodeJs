const figlet = require("figlet");
figlet("Hello Killua !!", function (err, data) {
  if (err) {
    console.log("Something Went Wrong .....");
    console.dir(err);
    return;
  }
  console.log(data);
});
