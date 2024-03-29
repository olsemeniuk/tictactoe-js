const e=document.getElementById("game-field"),t=document.getElementById("notification");var i=new class{render(){let t="";for(let e=0;e<9;e++)t+=`<div class="game__cell" data-index=${e}></div>`;e.innerHTML=`<div class="game">${t}</div>`}},n=new class{handleClear(){t.innerHTML=""}render(e){t.innerHTML=`
            <div class="notification">
                <p class="notification__text">${e} win!</p>
                <p class="notification__question">Would you like to try again?</p>
                <div class="notification__buttons">
                    <button id="restart" class="notification__button" type="button">YES</button> 
                    <button id="exit" class="notification__button" type="button">NO</button> 
                </div>
            </div>        
        `}},a=new class{constructor(){this.activePlayer=1,this.gameOver=!1,this.winCombinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]}startGame(){e.addEventListener("click",e=>{let{target:t}=e,i=t.closest(".game__cell");i&&this.draw(i)})}draw(e){if(this.gameOver)return;let t=1===this.activePlayer?"x":"0";""===e.textContent&&(e.textContent=t,e.dataset.sign="x"===t?"cross":"zero",this.activePlayer=1===this.activePlayer?2:1,this.checkIfWin())}startNewGame(){this.gameOver=!1,this.clearCells(),this.activePlayer=1,n.handleClear()}clearCells(){document.querySelectorAll(".game__cell").forEach(e=>{e.innerHTML="",e.dataset.sign=""})}checkIfWin(){let e=document.querySelectorAll('[data-sign="cross"]'),t=document.querySelectorAll('[data-sign="zero"]');if(e.length>=3||t.length>=3){let i=[],a=[];e.forEach(e=>{i.push(Number(e.dataset.index))}),t.forEach(e=>{a.push(Number(e.dataset.index))});let s=!1,r=!1,l="";for(let e=0;e<this.winCombinations.length;e++){let t=this.winCombinations[e];if(s=t.every(e=>a.includes(e)),r=t.every(e=>i.includes(e)),s||r){l=s?"zero":"cross",a=[],i=[],this.gameOver=!0;break}}this.gameOver&&(n.render(l),document.getElementById("restart").addEventListener("click",()=>this.startNewGame()),document.getElementById("exit").addEventListener("click",()=>n.handleClear()))}}};i.render(),a.startGame();
//# sourceMappingURL=index.2262c0a9.js.map
