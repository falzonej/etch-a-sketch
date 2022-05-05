const container = document.querySelector('#container');
const colsContainer = document.querySelector('#colsContainer');
const resetButton = document.querySelector('#resetButton');
const newGridButton = document.querySelector('#newGridButton');

function createRow(gridSize,gridSize) {
    const rowContainer = document.createElement('rowContainer');
    rowContainer.className = 'rowContainer';
    colsContainer.append(rowContainer)

        function addCol() {
            const gridItem = document.createElement('gridItem');
            gridItem.className = 'gridItem';
            rowContainer.append(gridItem);
            gridItem.style.height = 960/gridSize + 'px';
            gridItem.style.width = 960/gridSize + 'px';
        }

    for (let i = 0; i < gridSize; i++){
            addCol();
        }
}

function createGridDivs(gridSize, gridSize) {
    for (let i = 0; i < gridSize; i++){
        createRow(gridSize,gridSize);;
    }   
}
newGridButton.addEventListener('click', function(){
let gridSize = prompt('Enter grid size', '0');
if (gridSize>100){
    window.alert('That grid size is too large for this game, try again.');
  }else if(gridSize>100){
    window.alert('That grid size is too large for this game, try again.')
  }else{
  createGridDivs(gridSize,gridSize);
  }
  const gridItem = document.querySelectorAll('.gridItem');

  

  gridItem.forEach(function(gridItem){
    color = "#"
      gridItem.addEventListener('mouseover', function() {
        placeHolder = "#"
        color = placeHolder += Math.random().toString().slice(2,8);
        gridItem.style.backgroundColor = color;
        })})

  gridItem.forEach(function(gridItem){
      resetButton.addEventListener('click', function() {
          gridItem.setAttribute("style", "backgroundColor: white");
          gridItem.style.height = 960/gridSize + 'px';
          gridItem.style.width = 960/gridSize + 'px';
      })})

  gridItem.forEach(function(gridItem){
    newGridButton.addEventListener('click', function(){
      gridItem.remove();
    })})
})