import './Interface.css';
import { ROOT_FIELD } from '../constants/root';

class Interface {
    render() {
        let htmlContent = "";
        for (let i = 0; i < 9; i++) {
            htmlContent += `<div class="game__cell" data-index=${i}></div>`;
        }
        ROOT_FIELD.innerHTML = `<div class="game">${htmlContent}</div>`;
    }
}

export default new Interface();
