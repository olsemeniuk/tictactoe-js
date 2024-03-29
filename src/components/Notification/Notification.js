import { ROOT_NOTIFICATION } from '../../constants/root';
import './Notification.css';

class Notification {
    handleClear() {
        ROOT_NOTIFICATION.innerHTML = '';
    }

    render(winnerName) {
        ROOT_NOTIFICATION.innerHTML = `
            <div class="notification">
                <p class="notification__text">${winnerName} win!</p>
                <p class="notification__question">Would you like to try again?</p>
                <div class="notification__buttons">
                    <button id="restart" class="notification__button" type="button">YES</button> 
                    <button id="exit" class="notification__button" type="button">NO</button> 
                </div>
            </div>        
        `;
    }
}

export default new Notification();
