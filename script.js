const container = document.querySelector('#container');
const rowsContainer = document.querySelector('#rowsContainer')



function createRow(x,y) {
    const colContainer = document.createElement('colContainer');
    colContainer.className = 'colContainer';
    rowsContainer.append(colContainer)

        function addCol(y) {
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
createGridDivs(3,2)

//I want to write a program that will print as many rows as it 
//needs to be equal to the 'y' value. And another function 
//inside of the 'row' function that will create horizontal
//divs equal to the 'x' measurement. That way it will take 'y'
//print the row divs, then print the divs for the columns 
//inside of the rows and we can set one css property to 
//create the hover functionality desired.
