const container = document.querySelector('#container');
const rowsContainer = document.querySelector('#rowsContainer')
const  resetButton = document.querySelector('#resetButton');
const newGridButton = document.querySelector('#newGridButton');


function createRow(x,y) {
    const colContainer = document.createElement('colContainer');
    colContainer.className = 'colContainer';
    rowsContainer.append(colContainer)

        function addCol() {
            const col = document.createElement('col');
            col.className = 'col';
            colContainer.append(col);

        }
        
    for (let i = 0; i < y; i++){
            addCol();
        }
}

function createGridDivs(x, y) {
    for (let i = 0; i < x; i++){
        createRow(x,y);;
        
    }
    
}

newGridButton.addEventListener('click', function(){
  let x = prompt('Enter grid Height', '0');
  let y = prompt('Enter grid Width', '0')
  console.log(x)
  console.log(y)
  createGridDivs(x,y);
  
  const col = document.querySelectorAll('.col');

col.forEach(function(col){
    col.addEventListener('mouseover', function() {
        col.classList.add('touched');
    })})

    col.forEach(function(col){
        resetButton.addEventListener('click', function() {
            col.classList.remove('touched');
        })})
})

//createGridDivs(50,50)
//createGridDivs(100,100)



//next add player input for grid size
//then work on up and downsizing the window
//while keeping the grid the same pixel size
