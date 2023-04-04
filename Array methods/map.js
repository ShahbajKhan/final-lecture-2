let people = [
  {
    name: "John Doe",
    age: 32,
    occupation: "Software Engineer",
  },
  {
    name: "Jane Smith",
    age: 27,
    occupation: "Marketing Manager",
  },
  {
    name: "Bob Johnson",
    age: 45,
    occupation: "Accountant",
  },
];

const numArray = [1, 2, 3, 4];

// [1,4,9,16]
// const squaredArray = numArray.map(function(number, index){
//     return number*number;
// });
const squaredArray = numArray.map((number, index) => {
  return number * number;
});

// console.log(squaredArray);

// find those numbers which are GT 1
console.log(
  numArray.map((number) => {
    if (number > 1) return number;
  })
);
