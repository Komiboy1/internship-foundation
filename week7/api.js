const input = document.getElementById("countryInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("result");

async function searchCountry() {

    const country = input.value.trim();

    if (country === "") {
        result.innerHTML = "<p>Please enter a country name.</p>";
        return;
    }

    result.innerHTML = "<p>Loading...</p>";

    try {

        const response = await fetch(
            `https://restcountries.com/v3.1/name/${country}?fullText=true`
        );

        if (!response.ok) {
            throw new Error("Country not found.");
        }

        const data = await response.json();

        const countryData = data[0];

        result.innerHTML = `
            <h2>${countryData.name.common}</h2>

            <img src="${countryData.flags.png}" alt="Flag">

            <p><strong>Capital:</strong> ${countryData.capital[0]}</p>

            <p><strong>Region:</strong> ${countryData.region}</p>

            <p><strong>Population:</strong> ${countryData.population.toLocaleString()}</p>
        `;

    } catch (error) {

        result.innerHTML = `
            <p>${error.message}</p>
        `;
    }

}

button.addEventListener("click", searchCountry);