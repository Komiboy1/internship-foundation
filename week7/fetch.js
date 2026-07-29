const postDiv = document.getElementById("post");
const jokeDiv = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// Fetch a sample post
async function loadPost() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if (!res.ok) {
            throw new Error("Unable to fetch post.");
        }

        const data = await res.json();

        postDiv.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
        `;
    } catch (error) {
        postDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Fetch a random joke
async function loadJoke() {
    try {
        jokeDiv.textContent = "Loading joke...";

        const res = await fetch("https://official-joke-api.appspot.com/random_joke");

        if (!res.ok) {
            throw new Error("Unable to fetch joke.");
        }

        const joke = await res.json();

        jokeDiv.innerHTML = `
            <h3>${joke.setup}</h3>
            <p>${joke.punchline}</p>
        `;
    } catch (error) {
        jokeDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

loadPost();

jokeBtn.addEventListener("click", loadJoke);