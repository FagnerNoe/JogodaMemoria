const emojis = [
    "❤️",
    "❤️",    
    "😁",
    "😁",
    "😎",
    "😎",
    "😍",
    "😍",
    "😱",
    "😱",
    "👻",
    "👻",
    "🦖",
    "🦖",
    "🐥",
    "🐥",
    "🌭",
    "🌭",
    "🤡",
    "🤡"
];
 
let openCards = [];



let embaralharEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i=0; i<emojis.length; i++){                  //Criar Cards Dinamicamente
    let box = document.createElement('div');
    box.className = 'item';
    box.onclick = handleClick;
    box.innerHTML = embaralharEmojis[i];
    document.querySelector(".game").appendChild(box);
}

function openModal(){
        let modal = document.querySelector('.modal-container');
        modal.classList.add('active');
        
        console.log(modal)
        

        modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') != -1) {
        modal.classList.remove('active');   
    
    }
   }
}

function handleClick(){                         //funcao que verificará se as cartas já foram selecionadas e as coloca no vetor 
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2){
        setTimeout(checkMatch,200);
    }
}


function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }    
    
    openCards = [];
    
    
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        openModal();
    }   
    
}


