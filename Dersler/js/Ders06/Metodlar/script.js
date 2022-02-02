// Filter
const numbers = [60,70,25,3,80,10,24];

const filteredNumbers = numbers.filter(n => n > 50);
// console.log(numbers);
// console.log(filteredNumbers);

const students = [
  {name:'varol', passed: false},
  {name:'sercan', passed: true},
  {name:'simge', passed: true},
  {name:'osman', passed: false},
  {name:'hira', passed: false},
];

const studentsPassed=students.filter(student=>student.passed);
const studentsNotPassed=students.filter(student=>!student.passed);

// console.log("Geçenler:",studentsPassed);
// console.log("Geçemeyenler:",studentsNotPassed);

// studentsPassed.forEach(function(student){
//   console.log(student.name,"Geçti");
// })
// studentsNotPassed.forEach(function(student){
//   console.log(student.name,"Geçemedi");
// })

// const newNumbers = numbers.map(number=>number+10);
// console.log(numbers);
// console.log(newNumbers);

// Map Metodu
const passedStudents = students.map(student=>{
return {name:student.name, passed: !student.passed?student.passed=true:student.passed}
}).filter(student=>student.name.includes("r"));
// console.log(passedStudents);

// !student.passed?student.passed=true:student.passed

// if(student.passed==false){
//   return student.passed=true;
// } else {
//   return student.passed
// }

// Reduce Metodu
const result = numbers.reduce((value,number)=>{
  if(number>50){
    value++;
  }
  return value;
},0);
// console.log(numbers);
// console.log(result);

const students2 = [
  {name:'varol', point: 60},
  {name:'sercan', point: 30},
  {name:'simge', point: 100},
  {name:'osman', point: 80},
  {name:'hira', point: 40},
];

const passedStudents2 = students2.reduce((value,student)=>{
  student.point>50?value++:value;
  // if(student.point>50){
  //   value++;
  // }
  return value;
},0);
// console.log(passedStudents2);

// Find Metodu
const findNumber = numbers.find(number => number>50);
// console.log(numbers);
// console.log(findNumber);
  
// pop, shift, splice ve push medotu
// const numbers = [60,70,25,35,80,10,24];
// numbers.push(90);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// const numbers3 = numbers.filter(n=>n!=35);
// numbers3.shift();
// numbers.splice(1,2)
// console.log(numbers);

// Find İndex
// const index = numbers.findIndex(number=>number==10);
// console.log(index);
// numbers[index]=50;
// console.log(numbers);

// Reverse ve Sort
numbers.sort((a,b)=>b-a);
numbers.reverse();
console.log(numbers);