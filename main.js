const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
const message = document.getElementById('message');

let state = ['>', '>', '>', '_', '<', '<', '<'];

function updateBoard() {
    board.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;

        const frog = document.createElement('div');
        frog.className = 'frog';
        if (state[i] === '>') {
            frog.classList.add('frog-right');
        } else if (state[i] === '<') {
            frog.classList.add('frog-left');
        }

        cell.appendChild(frog);
        board.appendChild(cell);

        if (state[i] === '>' || state[i] === '<') {
            cell.addEventListener('click', handleClick);
        }
    }
    checkWin();
}

function handleClick(event) {
    const index = Number(event.currentTarget.dataset.index);
    const frog = state[index];
    let target = -1;

    if (frog === '>') {
        if (state[index + 1] === '_') {
            target = index + 1;
        } else if (state[index + 2] === '_' && (state[index + 1] === '<' || state[index + 1] === '>')) {
            target = index + 2;
        }
    } else if (frog === '<') {
        if (state[index - 1] === '_') {
            target = index - 1;
        } else if (state[index - 2] === '_' && (state[index - 1] === '<' || state[index - 1] === '>')) {
            target = index - 2;
        }
    }

    if (target !== -1) {
        state[target] = frog;
        state[index] = '_';
        updateBoard();
    }
}

function resetGame() {
    state = ['>', '>', '>', '_', '<', '<', '<'];
    message.textContent = '';
    updateBoard();
}
resetButton.addEventListener('click', resetGame);

function checkWin() {
    const winState = ['<', '<', '<', '_', '>', '>', '>'];
    if (state.join('') === winState.join('')) {
        message.textContent = 'Você venceu!';
    }
}

updateBoard();