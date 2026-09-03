// const title = ['period', 'i', 'c', 's', 'g', 'e', 'n', 'r', 'a', 't','o', 'e1', 'r1'];
const title = ['period', 'i', 'c', 's', 'g', 'e', 'n', 'r', 'a', 't','o', 'e1', 'r1'];

function randomizer(value) {
    const element = document.querySelector(`.${value}`);
    if (!element) return;
    const mathrandom = Math.round(Math.random() * 100);
    if (mathrandom == 67) {
        element.classList.toggle('fun-color');
    } else if (0 < mathrandom & mathrandom <= 25) {
        element.classList.toggle('first-color');
    } else if (25 < mathrandom & mathrandom <= 50) {
        element.classList.toggle('second-color');
    } else if (50 < mathrandom & mathrandom <= 75) {
        element.classList.toggle('third-color');
    } else {
        element.classList.toggle('fourth-color');
    }
    // For Troubleshooting
    // console.log(mathrandom)
};

function remover(rem) {
    const element = document.querySelector(`.${rem}`);
    const colors = ['first-color', 'second-color', 'third-color', 'fourth-color', 'fun-color']
    for (const color of colors)
        if (element.classList.contains(color)) {
            element.classList.remove(color);
    }
}

for (const value of title) {
    const element = document.querySelector(`.${value}`);
    if (element) {
        element.addEventListener('mouseover', () => randomizer(value))
        element.addEventListener('mouseout', () => remover(value))
    }
};

// for the beginning blinking

function blinker (value, times) {
    let count = 0
    function blink() {
        if (count === times * 2) return;
        if (count % 2 === 0) {
            randomizer(value);
        } else {
            remover(value);
        }
        count++;
        const delay = 100 + (Math.random() * 100)
        setTimeout(blink, delay);
    }
    blink();
}

function caller() {
    resetter()
    for (const value of title) {
        const element = document.querySelector(`.${value}`)
        if (!element) continue;
        const startDelay = Math.random() * 100;
        const number_of_flashes = (Math.round(Math.random() * 4));
        setTimeout(() => blinker(value, number_of_flashes), startDelay);
    }
}

function resetter() {
    const colors = ['first-color', 'second-color', 'third-color', 'fourth-color', 'fun-color'];
    for (const value of title) {
        const element = document.querySelector(`.${value}`);
        if (!element) continue;
        for (const color of colors) {
            element.classList.remove(color);
        }
    }
}

window.addEventListener('DOMContentLoaded', caller);