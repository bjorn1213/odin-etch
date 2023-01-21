// get available height for grid
const bannerDiv = document.querySelector('.banner');
const bannerHeight = bannerDiv.offsetHeight;
const viewportHeight = window.innerHeight;
const sketchHeight = viewportHeight - bannerHeight;

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
        item.style.backgroundColor = getRandomRGB();
        sketchContainer.appendChild(item);
    }
};

function getRandomRGB(){
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    return `rgb(${r},${g},${b})`;
};

createGrid();