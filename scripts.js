const numberOfSquares = 16;
const squareArea = numberOfSquares * numberOfSquares;
const container = document.querySelector(".container");

const makeBox = () => {
    const height = `${Math.floor(parseFloat(getComputedStyle(container).height)) / numberOfSquares}px`;
    let box = document.createElement("div");

    box.classList.add("box-item");
    box.style.height = height;
    box.style.width = height;

    box.addEventListener("mouseover", () => {
        const list = box.classList;
        if(list.contains("medium")) list.add("dark");
        if(list.contains("light")) list.add("medium");
        if (!list.contains("light")) list.add("light");
        
    })

    return box
}

const makeGrid = (squareArea) => {
    for (let i = 0; i <squareArea; i ++) {
        container.appendChild(makeBox());
    }
}

makeGrid(squareArea);