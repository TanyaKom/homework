
const countriesDropdown = document.getElementById("countries");
const citiesDropdown = document.getElementById("cities");
const selectedCountryText = document.getElementById("selectedCountry");
const selectedCityText = document.getElementById("selectedCity");

const countryData = {
    Ukraine: ["Kharkiv", "Kiev", "Lviv", "Odessa", "Dnipro"],
    USA: ["New-York", "Washington", "Boston", "Chikago", "Los Angeles"],
    Germany: ["Berlin", "Hamburg", "Munich", "Frankfurt", "Stuttgart"]
};

function populateCities() {
    const selectedCountry = countriesDropdown.value;
    citiesDropdown.innerHTML = "";

    countryData[selectedCountry].forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citiesDropdown.appendChild(option);
    });
    selectedCountryText.textContent = `Country: ${selectedCountry}`;
    selectedCityText.textContent = `City: Not selected`;

}
populateCities();


countriesDropdown.addEventListener("change", populateCities);
citiesDropdown.addEventListener("change", () => {
    const selectedCity = citiesDropdown.value;
    selectedCityText.textContent = `City: ${selectedCity}`;
});