const container = document.querySelector('#container');
const rowsContainer = document.querySelector('#rowsContainer')
const col = document.querySelector('.col');



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
        createRow(x,y);
        
    }
    
}
createGridDivs(10,10)

//I need to add a function that will add a class of touched
// to each div after it is moused over and that class will
// contain the styling for changing colors and can be group
// cleared for the reset button later