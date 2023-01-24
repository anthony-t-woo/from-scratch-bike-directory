export function renderBike(bike) {
    const a = document.createElement('a');
    const div = document.createElement('div');
    const imgEL = document.createElement('img');
    const makeAndModelEL = document.createElement('p');

    a.classList.add('bike-card');
    a.href = `./detail/?id=${bike.id}`;
    imgEL.src = `./assets/images/${bike.model}.jpeg`;
    makeAndModelEL.textContent = `${bike.make} ${bike.model}`;

    div.append(makeAndModelEL, imgEL);
    a.append(div);
    return a;
}
