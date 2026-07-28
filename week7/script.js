const heading = document.getElementById("Heading");
const headingBtn = document.getElementById("changeHeading");
const input = document.getElementById("nameInput");
const colorBtn = document.getElementById("changeColor");
const hoverText = document.getElementById("hoverText");

headingBtn.addEventListener("click", () => {
    heading.textContent = "Clicked!";
})

input.addEventListener("input", (event) => {
    console.log(event.target.value);
})

const colors = [
    "F9C74F",
    "90BE6D",
    "577590",
    "F94144",
    "43AA8B",
    "FFFFFF",
];

let index = 0;

colorBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[index];
    index++;

    if(index >= colors.length){
        index = 0;
    }
});

hoverText.addEventListener("mouseover", () => {
    hoverText.textContent = "Mouse is over me!";
});