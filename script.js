const container = document.querySelector('#container');

function addCol() {
    const div = document.createElement('row');
    div.className = 'col';
    container.append(div);
}
function addRow() {
    const div = document.createElement('col');
    div.className = 'row';
    container.append(div);
}

function createGridDivs(gridLength, gridWidth) {
    for (let i = 0; i < gridLength; i++){
        addCol();
    }
    for (let i = 0; i < gridWidth; i++){
        addRow();
    }
}
createGridDivs(6, 6)