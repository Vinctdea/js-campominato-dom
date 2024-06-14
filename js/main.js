// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// selezione difficolta e start al click
const level = document.getElementById("level");
const start = document.querySelector(".btn");
const form = document.querySelector("form");
const container = document.querySelector(".cont_grid");

// click genera livello
start.addEventListener("click",
    function(){
        form.classList.add("none");
        let valoreLevel = parseInt(level.value);
        console.log(valoreLevel);
        container.classList.remove("none");
        let colonna;
        if (valoreLevel===100) {
            colonna="col10"
        }else if(valoreLevel===81){
            colonna="col9"
        }else{
            colonna="col7"
        }
        for (let i = 1; i <= valoreLevel; i++) {
            container.innerHTML += newElementClassN("div", colonna + " bord" + " lock" , i);
              
        } 

        
        // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        const lock = document.querySelectorAll(".lock")
        for (let i = 0; i < lock.length; i++) {
            const lockIesimo = lock[i];
            lockIesimo.addEventListener("click",
                function () {
                    lockIesimo.classList.add("clicked");
                    console.log();
                }
            )
            
        }
        
            
    }   
   
);                                       






    


    

    
 






// creo una funzione che genra elementi e classi
function newElementClassN(elem, classe, text){
        let newElem = `<${elem} class="${classe}">${text}</${elem}>`
        return newElem;
    }




