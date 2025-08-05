const board = document.getElementById('board');

for (let i = 0; i < 7; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    const frog = document.createElement('div');
    frog.className = 'frog';
    cell.appendChild(frog);
    board.appendChild(cell);
}
