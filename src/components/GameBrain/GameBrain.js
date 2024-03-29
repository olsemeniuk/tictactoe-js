import { ROOT_FIELD } from '../../constants/root';
import Notification from '../Notification';

class GameBrain {
    constructor() {
        this.activePlayer = 1;
        this.gameOver = false;

        this.winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    }

    startGame() {
        ROOT_FIELD.addEventListener('click', event => {
            const { target } = event;
            const isCell = target.closest('.game__cell');
            if (!isCell) return;
            this.draw(isCell);
        });
    }

    draw(cell) {
        if (this.gameOver) return;
        const signToDraw = this.activePlayer === 1 ? 'x' : '0';
        const dataSign = signToDraw === 'x' ? 'cross' : 'zero';
        if (cell.textContent === '') {
            cell.textContent = signToDraw;
            cell.dataset.sign = dataSign;
            this.activePlayer = this.activePlayer === 1 ? 2 : 1;
            this.checkIfWin();
        }
    }

    startNewGame() {
        this.gameOver = false;
        this.clearCells();
        this.activePlayer = 1;
        Notification.handleClear();
    }

    clearCells() {
        const cells = document.querySelectorAll('.game__cell');
        cells.forEach(cell => {
            cell.innerHTML = '';
            cell.dataset.sign = '';
        });
    }

    checkIfWin() {
        const crossCells = document.querySelectorAll('[data-sign="cross"]');
        const zeroCells = document.querySelectorAll('[data-sign="zero"]');

        if (crossCells.length >= 3 || zeroCells.length >= 3) {
            let crossCellsCombinations = [];
            let zeroCellsCombinations = [];

            crossCells.forEach(cell => {
                crossCellsCombinations.push(Number(cell.dataset.index));
            });

            zeroCells.forEach(cell => {
                zeroCellsCombinations.push(Number(cell.dataset.index));
            });

            let zeroWin = false;
            let crossWin = false;
            let winner = '';
            for (let i = 0; i < this.winCombinations.length; i++) {
                const currentCombination = this.winCombinations[i];
                zeroWin = currentCombination.every(n => zeroCellsCombinations.includes(n));
                crossWin = currentCombination.every(n => crossCellsCombinations.includes(n));

                if (zeroWin || crossWin) {
                    winner = zeroWin ? 'zero' : 'cross';
                    zeroCellsCombinations = [];
                    crossCellsCombinations = [];
                    this.gameOver = true;
                    break;
                }
            }

            if (this.gameOver) {
                Notification.render(winner);
                document.getElementById('restart').addEventListener('click', () => this.startNewGame());
                document.getElementById('exit').addEventListener('click', () => Notification.handleClear());
            }
        }
    }
}

export default new GameBrain();
