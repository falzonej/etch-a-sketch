const container = document.querySelector('#container');
const colsContainer = document.querySelector('#colsContainer');
const resetButton = document.querySelector('#resetButton');
const newGridButton = document.querySelector('#newGridButton');
const resizeButton = document.querySelector('#resizeButton');

function createRow(height,width) {
    const rowContainer = document.createElement('rowContainer');
    rowContainer.className = 'rowContainer';
    colsContainer.append(rowContainer)

        function addCol() {
            const gridItem = document.createElement('gridItem');
            gridItem.className = 'gridItem';
            rowContainer.append(gridItem);
            gridItem.style.width = 960/width + 'px';
            gridItem.style.height = 960/height + 'px';
        }

    for (let i = 0; i < width; i++){
            addCol();
        }
}

function createGridDivs(height, width) {
    for (let i = 0; i < height; i++){
        createRow(height,width);;
    }   
}
newGridButton.addEventListener('click', function(){
let height = prompt('Enter grid Height', '0');
let width = prompt('Enter grid Width', '0');
if (height>100){
    window.alert('That grid size is too large for this game, try again.');
  }else if(width>100){
    window.alert('That grid size is too large for this game, try again.')
  }else{
  createGridDivs(height,width);
  }
  const gridItem = document.querySelectorAll('.gridItem');

  gridItem.forEach(function(gridItem){
      gridItem.addEventListener('mouseover', function() {
          gridItem.classList.add('touched');
          
      })})

  gridItem.forEach(function(gridItem){
      resetButton.addEventListener('click', function() {
          gridItem.classList.remove('touched');
      })})
      
  gridItem.forEach(function(gridItem){
    newGridButton.addEventListener('click', function(){
      gridItem.remove();
    })})

//  gridItem.forEach(function(gridItem){
//    resizeButton.addEventListener('click', function() {
//      gridItem.style.width = 960/width + 'px';
//      gridItem.style.height = 960/height + 'px';
//    })})
})
