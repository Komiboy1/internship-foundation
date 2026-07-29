# Event Listeners

# What is an Event Listener
An event listener is a JavaScript feature that waits for a specific event, such as a mouse click or keyboard input, and then executes a function. It allows web pages to respond to user interactions without reloading the page

# Events Used
# click
Runs when the user click an element such as a button

# Example:
button.addEventListener("click", function(){
    console.log("Button clicked");
});

# input
Runs whenever the value inside an input field changes

# Example
input.addEventListener("input", function(event){
    console.log(event.target.value);
});

# mouseover
Runs when the mouse pointer moves an element

# Example:
text.addEventListener("mouseover", function(){
    console.log("Mouse is over the element");
});

# Fetch and Promises

## Fetch API

The Fetch API is a built-in JavaScript feature that allows a webpage to send HTTP requests and receive data from servers. It is commonly used to retrieve information from REST APIs.

## Promise

A Promise represents the result of an asynchronous operation that may complete in the future. It can be pending, fulfilled, or rejected.

## Async and Await

The async keyword declares an asynchronous function, while await pauses the function until a Promise is resolved. This makes asynchronous code easier to understand and maintain.

## Try/Catch

The try...catch statement is used to handle errors that may occur during asynchronous operations. Instead of crashing the application, it displays a user-friendly error message.