const board = document.getElementById('board');

let state = ['>', '>', '>', '_', '<', '<', '<'];

for (let i = 0; i < 7; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    const frog = document.createElement('div');
    frog.className = 'frog';
    if (state[i] === '>') {
        frog.classList.add('frog-right');
    } else if (state[i] === '<') {
        frog.classList.add('frog-left');
    }
    cell.appendChild(frog);
    board.appendChild(cell);
}

