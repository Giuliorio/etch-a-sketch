const container = document.querySelector(".container");

const makeBox = (numberOfSquares) => {
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

const makeGrid = () => {
    const numberOfSquares = document.querySelector(".size-display").textContent;
    const squareArea = numberOfSquares * numberOfSquares;

    for (let i = 0; i <squareArea; i ++) {
        container.appendChild(makeBox(numberOfSquares));
    }
}

makeGrid();