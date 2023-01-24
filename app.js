/* Imports */
import { getBikes } from './fetch-utils.js';
import { renderBike } from './render-utils.js';
/* Get DOM Elements */
const bikeListContainer = document.querySelector('#bike-list-container');
/* State */
let bikesData = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getBikes();
    bikesData = response;
    displayBikes();
});
/* Display Functions */
function displayBikes() {
    bikeListContainer.textContent = '';
    for (let bike of bikesData) {
        const bikeEl = renderBike(bike);
        bikeListContainer.append(bikeEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
