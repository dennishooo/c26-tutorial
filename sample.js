const students = [
  { name: "dennis", gender: "M" },
  { name: "dennis", gender: "M" },
  { name: "dennis", gender: "F" },
  { name: "dennis", gender: "F" },
];

let count = { male: 0, female: 0 };

students.forEach((student) => {
  let x = 100;
  if (student.gender === "M") {
    count.male++;
  } else {
    count.female++;
  }
});

for (let student of students) {
  if (student.gender === "M") {
    count.male++;
  } else {
    count.female++;
  }
}

console.log(count);

let reduceCount = students.reduce(
  (pv, cv) => {
    if (cv.gender === "M") {
      pv.male++;
    } else {
      pv.female++;
    }
    return pv;
  },
  { male: 0, female: 0 }
);

console.log(reduceCount);

class Person {
  #name = "dennis";
  constructor(name) {
    this.#name = name;
  }
  greet = () => {
    console.log("hi there, im", this.#name);
  };
}

class Student extends Person {
  constructor(name) {
    super(name);
  }
  study = () => {
    console.log("im studying at tecky");
  };
}

let dennis = new Person("dennis");

// dennis.#name = "dennis on99";

dennis.greet();

let amy = {
  name: "amy",
  greet: () => {
    console.log(this.name);
  },
};

let genPerson = (name) => {
  return {
    // name,
    greet: () => {
      console.log(name);
    },
  };
};

let jeff = genPerson("jeff");

jeff.name = "craig";

jeff.greet();
amy.greet();

console.log(dennis instanceof Person);
console.log(amy instanceof Object);
console.log(jeff instanceof Object);

let karen = new Student("karen");

karen.name = "dsfdsf";

karen.greet();
karen.study();

// console.log(jeff.name);
