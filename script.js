const container = document.querySelector('#container');
const rowsContainer = document.querySelector('#rowsContainer')
const  resetButton = document.querySelector('#physicalResetButton');



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



createGridDivs(100,100)

const col = document.querySelectorAll('.col');

col.forEach(function(col){
    col.addEventListener('mouseover', function() {
        col.classList.add('touched');
    })})

    col.forEach(function(col){
        resetButton.addEventListener('click', function() {
            col.classList.remove('touched');
        })})