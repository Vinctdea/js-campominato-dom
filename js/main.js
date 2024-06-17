// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// selezione difficolta e start al click
const level = document.getElementById("level");
const start = document.getElementById("start");
const form = document.querySelector("form");
const container = document.querySelector(".cont_grid");
const score = document.querySelector(".cont_score");
const restart = document.getElementById("restart");
const punteggio = document.getElementById("punteggio");

let contatore= 0;

// click genera livello
start.addEventListener("click",
    function(){
        form.classList.add("none");
        let valoreLevel = parseInt(level.value);
        console.log(valoreLevel);
        container.classList.remove("none");
        let colonna;
        if (valoreLevel===100) {
            colonna="col10";
        }else if(valoreLevel===81){
            colonna="col9";
        }else{
            colonna="col7";
        }
        for ( z = 1; z <= valoreLevel; z++) {
            
            container.innerHTML += newElementClassN("div", colonna + " bord" + " lock" , z);

              
        } 
        let bomba = sequenzaNumeriRandom(1, valoreLevel,16);
        console.log(bomba);
       
        // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

         // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
                    // Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
        const lock = document.querySelectorAll(".lock")
        for (let i = 0; i < lock.length; i++) {
            const lockIesimo = lock[i];
            
            
            
            lockIesimo.addEventListener("click",
                function () {                   
                    contatore = contatore+1;
                    if (bomba.includes(parseInt(lockIesimo.textContent))) {
                        lockIesimo.classList.add("red");
                        score.classList.remove("none");
                        punteggio.innerHTML= `il tuo punteggio è: ${contatore}` 
                        
                                                
                        
                    }else{
                        lockIesimo.classList.add("clicked");
                                               
                        
                    }               
                    

                }
            );
            
        }
        
            
    }  
       
);                                       


// click a termine partita per restart
restart.addEventListener("click",
    function(){
        window.location.reload()
    }
)


////////////////// PARTE 2/////////////////////////////



// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.





// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.








// BONUS:

// Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle;
// Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
    


    

    
 










//////////////////////// FUNZIONI///////////////////////////////

// creo una funzione che genra elementi e classi
function newElementClassN(elem, classe, text){
        let newElem = `<${elem} class="${classe}">${text}</${elem}>`
        return newElem;
    }


    
// funzione sequenza numeri random
function sequenzaNumeriRandom(min, max, quantita){

    const array = [];

    while(array.length < quantita){

        // genero numero random da 1 a 16 usando la funzione
        let newRandom = numRandom(min, max);
        if (!array.includes(newRandom)) {
            array.push(newRandom);
        }
    }    
    return array
}


// funzione genera numero ramndom
function numRandom(min, max) {
    return parseInt(Math.floor(Math.random() * (1 + max - min)) + min);
}
    