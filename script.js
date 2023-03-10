// get available height for grid
const bannerDiv = document.querySelector('.banner');
const bannerHeight = bannerDiv.offsetHeight;
const viewportHeight = window.innerHeight;
const sketchHeight = viewportHeight - bannerHeight;

const refreshButton = document.querySelector('.btn-refresh');
refreshButton.addEventListener('click', refreshGrid);

function createGrid(gridSize = 16){

    // determine grid item dimensions
    const gridItemSide = Math.floor(sketchHeight / gridSize);
    
    const sketchContainer = document.querySelector('.sketch-container');

    // set up grid area
    sketchContainer.removeAttribute('style');
    sketchContainer.replaceChildren();
    sketchContainer.style.display = 'grid';
    sketchContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${gridItemSide}px)`;
    sketchContainer.style.gridTemplateRows = `repeat(${gridSize}, ${gridItemSide}px)`;
    sketchContainer.style.justifyContent = 'center';

    for (let i = 0; i < gridSize ** 2; i++){
        let item = document.createElement('div');
        item.style.backgroundColor = 'rgb(255, 255, 255)';
        item.addEventListener('mouseover', (event) => {alterBackgroundColour(event.target)});
        sketchContainer.appendChild(item);
    }
};

function getRandomRGB(){
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    return `rgb(${r},${g},${b})`;
};

function alterBackgroundColour(targetDiv){
    if (targetDiv.style.backgroundColor === 'rgb(255, 255, 255)'){
        targetDiv.style.backgroundColor = getRandomRGB();
    } else {
        const rgb = targetDiv.style.backgroundColor.replace(/[^\d,]/g, '').split(',');
        const r = Math.max(rgb[0] - 25, 0);
        const g = Math.max(rgb[1] - 25, 0);
        const b = Math.max(rgb[2] - 25, 0);
        targetDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
};

function refreshGrid(){
    let valid = false;
    let gridSize = 0;

    while (!valid){
        gridSize = +prompt('Enter grid size. (max 100)', '16');
        
        if (Number.isInteger(gridSize)){
            valid = true;
        } else {
            valid = false;
        }
    }

    console.log(gridSize);
    if (gridSize === 0){
        return;
    } else if (gridSize < 0){
        createGrid(1);
    } else if (gridSize > 100){
        createGrid(100);
    } else {
        createGrid(gridSize);
    }

};

createGrid();
