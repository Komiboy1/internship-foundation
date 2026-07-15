# JavaScript Fundamentals

# What is JavaScript
JavaScript is a programming language that makes web pages interactive and dynamic. Unlike HTML and CSS, JavaScript can perform calculations, respond to user actions, and change webpage content.

JavaScript can run:
- In the browser console
- Inside a script tag in a HTML file
- In a separate JavaScript file linked to HTML

# Console Observations
console.log('Hello, world') -> Hello, world!
console.log(2 + 2) -> 4
console.log('2' + 2) -> 22 because the number is converted to a string
typeof 'hello' -> string
typeof 42 -> number

# Variables and Data Types

Variables store values in JavaScript

- const is used when the value should not change
- let is used when the value can change
- var is an older way of creating variables and is generally avoided

Common data types:
- String
- Number
- Boolean
- Array
- Object
- Null
- Undefined

Arrays use indexes that start at 0

Objects store data as properties that can be accessed using dot notation

null means an intentional empty value, while undefined means a variable has not been assigned a value

# Functions and Control Flow
Functions are reusable blocks of code that perform specific tasks. They can accept inputs (parameters) and return outputs using the 'return' keyword

There are two common ways to write functions in JavaScript:
- Function declarations
- Arrow functions

Control flow allows a program to make decisoins and repeat actions

- 'if/else' statements execute different code depending on whether a condition is true or false
- 'for' loops repeat code a specific number of times
- 'foeEach()' loops through each item in an array and is often simpler to read than a 'for' loop.

# DOM Basics
The DOM (Document Object Model) is how JavaScript represents an HTML page as objects. It allows JavaScript to access and modify webpage elements

Methods used:
- 'document.getElementById()' selects an element by its unique ID
- 'document.querySelector()' select the first element that matches a CSS selector
- 'textContent' changes or reads the text inside an element
- 'style' changes an element's CSS properties
- 'document.createElement()' creates a new HTML element
- 'appendChild()' adds the new element to the webpage

Using these methods, JavaScript can dynamically update a webpage without changing the original HTML file