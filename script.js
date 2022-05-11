const container = document.querySelector('#container');
const colsContainer = document.querySelector('#colsContainer');
const resetButton = document.querySelector('#resetButton');
const newGridButton = document.querySelector('#newGridButton');

function createRow(gridSize,gridSize) {
    const rowContainer = document.createElement('rowContainer');
    rowContainer.className = 'rowContainer';
    colsContainer.append(rowContainer);

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
    }}
newGridButton.addEventListener('click', function(){
let gridSize = prompt('Enter grid size', '0');
if (gridSize>100){
    window.alert('That grid size is too large for this game, try again.');
  }else if(gridSize>100){
    window.alert('That grid size is too large for this game, try again.');
  }else{
  createGridDivs(gridSize,gridSize);
  }
  const gridItem = document.querySelectorAll('.gridItem');

  

  gridItem.forEach(function(gridItem){
    gridItem.addEventListener('mouseover', function() {
      placeHolder = "#";
      color = placeHolder += Math.random().toString().slice(2,8);
      gridItem.style.backgroundColor = color;
      gridItem.style.opacity += 0.1;
      })})

  gridItem.forEach(function(gridItem){
    gridItem.addEventListener('mouseover', function() {
      let opacity = parseFloat(gridItem.style.opacity);
      for(; opacity < 1; opacity++){
        let jsOpacity = opacity += .1;
        gridItem.style.opacity = jsOpacity
        return;}
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

//PLACES FOR FUTURE IMPROVEMENT

//ADD BUTTONS TO CHANGE BETWEEN BLACK&WHITE BACKGROUND COLORING,
//RAINBOW COLORING, AND TURNING FADE COLORING ON AND OFF.
//THE BLACK&WHITE SHOULD DEACTIVATE RAINBOW AND VICE VERSA
//BUT THE FADE COLORING SHOULD BE INDEPENDENT OF THESE TOO AND
//STAY ACTIVE WHENEVER SET.