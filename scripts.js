const display = document.querySelector(".size-display");
const container = document.querySelector(".container");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");

// Grid Area
const makeBox = (height) => {
    let box = document.createElement("div");

    box.classList.add("box-item");
    box.style.height = height;
    box.style.width = height;

    box.addEventListener("mouseover", () => {
        const opacity = box.style.opacity;

        box.style.opacity = opacity ? parseFloat(opacity) + 0.2 : 0.2;
    })

    return box
}

const makeGrid = (numberOfSquares) => {
    const squareArea = numberOfSquares * numberOfSquares;
    const height = `${parseFloat(getComputedStyle(container).height) / numberOfSquares}px`;
    container.innerHTML = ""

    for (let i = 0; i <squareArea; i ++) {
        container.appendChild(makeBox(height));
    }
}

makeGrid(display.textContent);

// Size Change Area
plus.addEventListener("click", () => {
    if (display.textContent === 100) return;
    display.textContent ++;
    makeGrid(display.textContent);
})

minus.addEventListener("click", () => {
    if (display.textContent === 16) return;
    display.textContent --;
    makeGrid(display.textContent);
})

display.addEventListener("click", () => {
    let answer = 0;
    do {
        answer = prompt("Pick a number between 0 and 100");
    } while (answer < 16 || answer > 100);

    display.textContent = answer;
    makeGrid(answer)
})

reset.addEventListener("click", () => {
    makeGrid(display.textContent)
})