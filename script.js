let cells = document.querySelectorAll('.cell');
function createDivs(numOfDivs){
    if(numOfDivs > 64){
        numOfDivs = 64;
    }
    destroyBoard();
    container.style.gridTemplateColumns = `repeat(${numOfDivs}, 1fr)`;
    for(i = 0; i < numOfDivs**2; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    cells = document.querySelectorAll('.cell');
    ink('black');
}
function clearStyling(){
    cells.forEach((cell) => {
        cell.classList.remove('hovered');
        cell.classList.remove('color');
        cell.classList.add('notHovered');
    });
}
function destroyBoard(){
    cells.forEach((cell) => {
        cell.remove();
    });
}
function ink(color){
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            if(color === 'rainbow'){
                cell.style.backgroundColor = `#${((1<<24)*Math.random()|0).toString(16)}`;
            } else{
                cell.style.backgroundColor = color;
            }
            cell.classList.remove('notHovered');
            cell.classList.add('hovered');
        });
        
    });
}
const container = document.querySelector('#container');
const clearBoard = document.getElementById('clear');
const resize = document.getElementById('resize');
const colorBtn = document.getElementById('color');
const blackBtn = document.getElementById('black');
const chooseColorBtn = document.getElementById('chooseColor');
createDivs(16);
clearBoard.addEventListener('click', function(){
    clearStyling();
});
resize.addEventListener('click', function(){
    createDivs(prompt("What should the new grid size be? (Max. 64)"));
});
colorBtn.addEventListener('click', function(){
    ink('rainbow');
});
blackBtn.addEventListener('click', function(){
    ink('black');
});

const colorPicker = new Picker(chooseColorBtn);
colorPicker.onDone = function(color) {
    ink('rgba(' + color.rgba[0] + ', ' + color.rgba[1] + ', ' + color.rgba[2] + ', ' + color.rgba[3] + ')');
};