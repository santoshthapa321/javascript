///logical operator
//&&
//OR||
//NOT |

let applicants = {
  person1: { age: 18, nepaliResident: true },
  person2: { age: 16, nepaliResident: false },
  person3: { age: 15, nepaliResident: true },
};

if (applicants.person1.age >= 16 && applicants.person1.nepaliResident) {
  console.log("eligible for citizenship");
} else {
  console.log("noteligible");
}

if (applicants.person2.age >= 16 && applicants.person2.nepaliResident) {
  console.log("eligible for citizen");
} else {
  console.log("not eligible");
}

if (applicants.person3.age >= 16 && applicants.person3.nepaliResident) {
  console.log("eligible for citizen");
} else {
  console.log("not eligible");
}
