let people = [
  {
    name: "John Doe",
    age: 22,
    occupation: "Software Engineer",
  },
  {
    name: "Jane Smith",
    age: 17,
    occupation: "Marketing Manager",
  },
  {
    name: "Bob Johnson",
    age: 15,
    occupation: "Accountant",
  },
];

let result = people.forEach((singlePerson) => {
  if (singlePerson.age >= 18) {
    singlePerson.isAdult = true;
  } else {
    singlePerson.isAdult = false;
  }
});

console.log(people);