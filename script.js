function createDivs(numOfDivs){
    container.style.gridTemplateColumns = `repeat(${numOfDivs}, 1fr)`;
    for(i = 0; i < numOfDivs**2; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}
const container = document.querySelector('#container');

createDivs(16);
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', function(){
        cell.classList.add('hovered');
    });
});