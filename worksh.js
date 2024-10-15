// 1. variabel

let fruit = "Apple";

fruit = "Orange";

console.log("The fruit is", fruit);

//2. math

//1
console.log(25 + 3.5);

//2
console.log(2024 - 1969);

//3
console.log(65 / 240);

//4
console.log(0.2708 * 100);

// 3. string function

console.log("ali".toUpperCase());

console.log("     Remove whitespace     ".trim());

console.log("How many characters long is this string".length);

//c 4. onditional statesment

const carSpeed = 85;

if (carSpeed > 100) {
  console.log("Slow down!");
} else {
  console.log("Carry on");
}

// 5. boolea

//1

const wordcount = 0;

if (wordcount === 0) {
  console.log("Get writing!");
}

//2
const currentTempetature = 15;
const goneForARun = false;

if (currentTempetature > 10 && goneForARun) {
  console.log("Go for a run!");
}

//3

const name1 = "Mary";

if (name1.length > 10) {
  console.log("You have a long name");
} else if (name1.lenght < 5) {
  console.log("You have a short name!");
} else {
  console.log("You have a medium lenght name!");
}

// 6. Function

//1

function printcurrentTime() {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
  console.log(printcurrentTime());
}

//2

function myname() {
  console.log("Ali");
}

myname();
myname();

//3

function printGreeting(Yname) {
  console.log("hi " + Yname);
}

printGreeting("Bob");
printGreeting("Sue");

//4
function multiply(a, b) {
  return a * b;
}

const first = multiply(2, 2);
console.log(first);

const second = multiply(100, 4);
console.log(second);

//5
function warmEnough(Tempetature) {
  return Tempetature > 10;
}

if (warmEnough(15)) console.log("Go for a run!");

//bonus fråga
