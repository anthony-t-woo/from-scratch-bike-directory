/* Imports */
import { getBike } from '../fetch-utils.js';
import { renderBikeDetail } from '../render-utils.js';
/* Get DOM Elements */
const bikeDetailContainer = document.querySelector('#bike-detail-container');
/* State */
let bikeData = {};

/* Events */
window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const response = await getBike(id);
    bikeData = response;
    displayBikeDetail();
});
/* Display Functions */

function displayBikeDetail() {
    bikeDetailContainer.textContent = '';
    const bikeDetailEl = renderBikeDetail(bikeData);
    bikeDetailContainer.append(bikeDetailEl);
}

// (don't forget to call any display functions you want to run on page load!)
