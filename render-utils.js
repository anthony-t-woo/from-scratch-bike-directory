export function renderBike(bike) {
    const a = document.createElement('a');
    const div = document.createElement('div');
    const imgEL = document.createElement('img');
    const makeAndModelEl = document.createElement('p');

    a.classList.add('bike-card');
    a.href = `./detail/?id=${bike.id}`;
    imgEL.src = `./assets/images/${bike.model}.jpeg`;
    makeAndModelEl.textContent = `${bike.make} ${bike.model}`;

    div.append(makeAndModelEl, imgEL);
    a.append(div);
    return a;
}

export function renderBikeDetail(bike) {
    const div = document.createElement('div');
    const imgEl = document.createElement('img');
    const makeEl = document.createElement('p');
    const modelEl = document.createElement('p');
    const makeAndModelEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const useEl = document.createElement('p');
    const descriptionEl = document.createElement('p');
    const useAndColorEl = document.createElement('p');

    div.classList.add('bike-detail');
    makeAndModelEl.classList.add('make-and-model');
    useAndColorEl.classList.add('use-and-color');
    descriptionEl.classList.add('description');

    imgEl.src = `../assets/images/${bike.model}.jpeg`;
    makeEl.textContent = `Brand: ${bike.make}`;
    modelEl.textContent = `Model: ${bike.model}`;
    colorEl.textContent = `Color: ${bike.color}`;
    descriptionEl.textContent = bike.description;
    useEl.textContent = `Primary Use: ${bike.primary_use}`;

    makeAndModelEl.append(makeEl, modelEl);
    useAndColorEl.append(useEl, colorEl);
    div.append(imgEl, makeAndModelEl, useAndColorEl, descriptionEl);
    return div;
}
