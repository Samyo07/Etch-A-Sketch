function createDivs(numOfDivs){
    container.style.gridTemplateColumns = `repeat(${numOfDivs}, 1fr)`;
    for(i = 0; i < numOfDivs**2; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}
function clearStyling(){
    cells.forEach((cell) => {
        cell.classList.remove('hovered');
        cell.classList.add('notHovered');
    });
}
const container = document.querySelector('#container');
const clearBoard = document.getElementById('clear');
createDivs(16);
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', function(){
        cell.classList.remove('notHovered');
        cell.classList.add('hovered');
    });
});
clearBoard.addEventListener('click', function(e){
    clearStyling();
});