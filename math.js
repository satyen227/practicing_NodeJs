const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const printFun = () => console.log("Hello Killua");

let obj = {
  sum: sum,
  mul: mul,
  fun: printFun,
};

module.exports = obj;
