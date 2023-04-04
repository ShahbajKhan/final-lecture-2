const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

let allData = person.result;
// console.log(allData);
allData.forEach((singlePerson, index) => {
  console.log(singlePerson);
  // let {name, isMale, address} = singlePerson;
  // name = "Sakib";
  
  // console.log(singlePerson);
  const personContainer = document.getElementById("person-container");
  personContainer.innerHTML += `
  <div class="col-12 col-md-4 col-lg-3">
  
  <div class="card">
           
            <div class="card-body">
              <h5 class="card-title">${singlePerson.name.common}</h5>
              <p class="card-text">${singlePerson.address.street}, house: ${singlePerson.address.house}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
  </div>
  `;
});
