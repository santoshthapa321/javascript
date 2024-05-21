// console.log("hello");
// //variable....
// //container / box -means esle kei kura store garchha
// // variables store data
// greetings = "Namaste";
// name = "Santosh";
// fullname = "Santosh Thapa";
// age = 22;
// console.log(greetings);
// console.log(name);
// console.log(age);
// console.log(greetings, name, age);
// console.log(fullname);
// //reserved keywords
// // for="fff";
// // if="nbkdvb"
// // const="gg"
// eutaofficekoaddress = "balaju"; //no space
// euta_office_ko_address = "Sukedhara"; //snake case
// eutaOfficeKoAddress = "dallukomassage center"; //camel case
// console.log(euta_office_ko_address, eutaOfficeKoAddress, eutaofficekoaddress);
// //variables ma kk kura rakhna milxa teslai datatypes vanninxa
// productPrice = 100;
// tarkarikoprice = 100.5;
// ismarried = true;
// /*datatype
// 1.string
// 2.Number
//      integer
//      alost/double
// 3. boolean
//     true/false

// */
// //variables banaune practice haru
// //const
// //let
// //var sakbar nagarne
// var laptopBrand = "Dell";
// console.log("laptop ko Brand", laptopBrand);
// const PI = 3.14;
// console.log("PI ko Value", PI);
// classTime = "1 Hour";
// console.log("class Time", classTime);
// //array example

// let subjects = ["English", "Nepali", "Maths", "Computer"];
// // array contains similar data types
// let oppo = "oppo";
// let Brand = ["Samsung", "Lenovo", "Iphone", oppo];
// console.log(Brand);
// //object concept
// /*
// let object = {
//     <key>: <value>
//     <property> : <value>
//     <attribute> : <value>
// }
// */

// let schoolDetails = {
//   schoolName: "Bagmati School",
//   schoolLoation: "Putalisadak",
//   schoolEstd: "1990",
// };
// console.log(schoolDetails);
// //practice
// //1.Making object with keys and their values

// let product = {
//   title: "t-Shirt",
//   color: "gray",
//   size: "XXL",
//   price: 999,
//   discount: "10%",
// };
// //2. Practicing array
// let yellow = "purple";
// const colors = ["red", "blue", "green", yellow];
// //3. Practicing array inside objects
// const cars = {
//   BMW: ["ix1", "ixx"],
//   suzuki: ["alto", "breeza"],
//   toyata: ["camry", "crown"],
// };

// //printing 123
// console.log(cars, colors, product);
// //printing cars bmw only
// console.log(cars.BMW);
// //
// let a = 111 + 1;
// let b = "111" + 1;

// console.log("a=", a, "b=", b);
// // creating object room
// let room1 = {
//   color: ["blue", "white"],
//   dimensions: {
//     length: {
//       value: 10,
//       unit: "meter",
//     },
//     width: {
//       value: 5,
//       unit: "meter",
//     },
//     height: {
//       value: 3,
//       unit: "meter",
//     },
//   },
//   door_count: 1,
// };
// // teacher details here

// let teacher1 = {
//   fullname: "Sudip Paudel",
//   age: 30,
//   address: "kathmandu",
//   hobbies: ["coding", "singing"],
//   height: {
//     value: 6,
//     unit: "feet",
//   },
//   subjects: {
//     computer: {
//       subject1: "computer",
//       period: "1st",
//       class: "10",
//     },

//     english: {
//       period: "5th",
//       class: 9,
//     },
//   },
// };
// //printing random keys
// console.log(teacher1.fullname, teacher1.address);
// // printing sudip paudel ko 1st period class 10 ma computer chha
// console.log(
//   teacher1.fullname +
//     " ko " +
//     teacher1.subjects.computer.period +
//     " period class " +
//     teacher1.subjects.computer.class +
//     " ma " +
//     teacher1.subjects.computer.subject1 +
//     " chha"
// );
//task
let person1 = {
  fullName: "ram lama",
  age: 24,
  address: "kathmandu",
  girlFriends: ["anita", "binita", "cita", "dolma"],
  height: {
    value: 6,
    unit: "meter",
  },
};
//printing whole
console.log(person1);
//printing gf's
console.log(person1.girlFriends);
//printing gf's individuallly-now cita
console.log(person1.girlFriends[2]);
//printing anita
console.log(person1.girlFriends[0]);
//printing height
console.log(person1.height);
//ternary operTOR
let colors = {
  color1: "white",
  hexValue: "#00000",
  color2: "blue",
  hexValue: "#00000",
  color3: "blue",
  hexValue: "#00000",
};
//to print white color ko hex value #00000 ho
console.log(`${colors.color1} color ko hex value ${colors.hexValue} ho`);
console.log(`${colors.color2} color ko hex value ${colors.hexValue} ho`);
console.log(`${colors.color3} color ko hex value ${colors.hexValue} ho`);

//function kei kura reuser garna ko lagi use garincha

// funtion functionname(){
//eha task garna ho
//}

console.log("sum of 1 + 2", 1 + 2);
console.log("sum of 3 + 4", 3 + 4);
console.log("sum of 5 + 10", 5 + 10);

function sum(num1, num2) {
  // let num1=1 let num2=2;
  console.log(`sum of ${num1} + ${num2} =`, num1 + num2);
}

// function chalauna call garna imp cha
//kasari fun call garne ta ? function ko name dine ani ()

sum();

sum();

// parmeters chai function bhitra halne kura ho

sum(1, 2);
sum(3, 4);
sum(5, 10);

function greetings(g1, name) {
  //l somethinetg=soome
  console.log(` ${g1}  ${name}`);
}

greetings("goodmorning", "Santosh");
greetings("Ohayogojaimas", "mirasan");
greetings("Anyanghasyo", "kimyoung");

//creating another function

function another(t1, t2) {
  console.log(`${t1}le ${t2} Khayo`);
}
another("Ram", "Kera");
another("Hari", "Bhat");
// let x = 5;
// let y = 10;
// let z = x + y;
// alert(z);
let text = "gadcjvdjcvajvch";
console.log(text.length);
////
let number = 100;
number = number + 10;
number += 30;
console.log(number);

// post increment

let agee = 20;
console.log(agee++); // post increment

console.log(++agee); //pre increment
console.log(agee);

// operator

// <
// >
// <=
// >=

// equity oprator

// == khasai strict hudaina tara === strict ekdam maintain gareko huncha

// "1"==1// true</>
// "1"===1 //false

// conditon

//  syntax
// if(condition){
// do true task
// }else{
// do something else
// }

let willRain = true;

if (willRain) {
  console.log("there will be online class");
} else {
  console.log("there will be physical class");
}

// if(true){
//   yo kura chalcha
// }else{
//   yo kura chalcha
// }

let hour = 14;
if (hour < 12) {
  console.log("good morning");
} else {
  console.log("good afternoon");
}

let minAge = 18;
let herAge = 19;
let hasConsent = false;

if (herAge >= 18) {
  if (hasConsent) {
    console.log("she can marry");
  } else {
    console.log("she cannt");
  }
} else {
  console.log("she cant marry");
}

let ageee = 20;

let willRainn = false;
let hasProbability = true;

if (willRain) {
  console.log("Online class");
} else {
  if (hasProbability) {
    console.log("Surely there will be online class");
  } else {
    console.log("there will be physical class");
  }
}

if (willRain) {
  console.log("online class");
} else if (hasProbability) {
  console.log("online class");
} else {
  console.log("physical class");
}
