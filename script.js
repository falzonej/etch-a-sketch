const container = document.querySelector('#container');
const rowsContainer = document.querySelector('#rowsContainer');
const  resetButton = document.querySelector('#resetButton');
const newGridButton = document.querySelector('#newGridButton');
const resizeButton = document.querySelector('#resizeButton');

function createRow(height,width) {
    const colContainer = document.createElement('colContainer');
    colContainer.className = 'colContainer';
    rowsContainer.append(colContainer)

        function addCol() {
            const col = document.createElement('col');
            col.className = 'col';
            colContainer.append(col);
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
  const col = document.querySelectorAll('.col');

  col.forEach(function(col){
      col.addEventListener('mouseover', function() {
          col.classList.add('touched');
      })})

  col.forEach(function(col){
      resetButton.addEventListener('click', function() {
          col.classList.remove('touched');
      })})
      
  col.forEach(function(col){
    newGridButton.addEventListener('click', function(){
      col.remove();
    })})

    col.forEach(function(col){
      resizeButton.addEventListener('click', function() {
          col.style.width = 960/width + 'px';
          col.style.height = 960/height + 'px';
    })})
})


//work on up and downsizing the window
//while keeping the grid the same pixel size
//look into using the input number of rows
//and columns to effect the height and width
//of the col divs and make the scalable that
//way