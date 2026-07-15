console.log("Hello, World!");
console.log(2+2);
console.log('2' + 2);
console.log(typeof 'hello');
console.log(typeof 42);
console.log("script.js connected successfully!");

// Exercise 1
const name = "Ebube";
console.log(name);

// Exercise 2
const age = 22;
console.log(age);

// Exercise 3
const isStudent = true;
console.log(isStudent);

// Exercise 4
const scores = [80, 65, 70];
console.log(scores);
console.log(scores[0]);
console.log(scores[1]);
console.log(scores[2]);

// Exercise 5
const person = {
    name: "Ebube",
    age: 20,
    course: "Sofware Engineering"
}

// Exercise 6
function largerNumber(a, b){
    if (a > b){
        return a;
    } else {
        return b;
    }
}

console.log(largerNumber(10, 3));
comsole.log(largerNumber(2, 6));

// Exercise 7
function sumArray(numbers){
    let total = 0;

    for (let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }

    return total;
}

console.log(sumArray([2, 4, 6, 8]));

// Exercise 8
function introduce(name, age){
    return "Hello, my name is " + name + " and I am " + age + " years old.";
}

console.log(introduce("Ebube", 24));



console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.course);

const middleName = null;
console.log(middleName);

let address;
console.log(address);


// DOM Basics

// Select heading
const heading = document.getElementById("main-heading");
console.log(heading);

// Select paragraph
const paragraph = document.querySelector("p");
console.log(paragraph.textContent);

// Change heading text
heading.textContent = "Changed by JavaScript!";

// Change paragraph style
paragraph.style.color = "blue";

// Create a new paragraph
const newParagraph = document.createElement("p");

// Add text to it
newParagraph.textContent =
    "This paragraph was created using JavaScript.";

// Add it to the page
document.body.appendChild(newParagraph);










