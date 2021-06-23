function printName(district, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + district + ", " + state
  );
}

let fullName = {
  firstName: "Bhuvenesh",
  lastName: "Verma",
};

let fullName2 = {
  firstName: "Kisame",
  lastName: "Hoshigake",
};

//call
printName.call(fullName, "Rohtak", "Haryana");
printName.call(fullName2, "Village Hidden in the Mist", "Land of Water");

//apply (similar to call but extra arguments are passed as a list)
printName.apply(fullName, ["Rohtak", "Haryana"]);
printName.apply(fullName2, ["Village Hidden in the Mist", "Land of Water"]);

//bind (binds the method to the object)
let printFullName = printName.bind(fullName, "Rohtak", "Haryana");
let printFullName2 = printName.bind(
  fullName2,
  "Village Hidden in the Mist",
  "Land of Water"
);

printFullName();
printFullName2();



