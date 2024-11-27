import { createCArt } from "./modules/playerCart.js";
import {  formations, positionsInTerrain } from "./modules/positions.js";

console.log("aaaaaa");
let list =[]
fetch("/assets/data/players.json")
.then(rep => {
    if(!rep.ok){
        console.error(`HTTP error! Status: ${rep.status}`);
        return;
    }
    return rep.json();
})
.then( data =>{
   if(data){ console.log(data);
    list =data.players;
    // console.log("list",list);
    dispalyPlayers(list);
   }
}
)
.catch(err => console.error("error de fetch ",err))

function dispalyPlayers(list){


    
    list.forEach(plyr =>  createCArt(plyr));
}

function addPlayerToTerrain(ev){
    ev.preventDefault();
// console.log('eeeeeeee');
}

 function changePositionOfPlayer(cart,frm){
    cart.style.top=formations[frm][cart.dataset.plyr].top
    cart.style.left=formations[frm][cart.dataset.plyr].left
    // cart.style.left='z' 
 }


function changeFormation(frm){
    positionsInTerrain.forEach(cart => {
        changePositionOfPlayer(cart,frm)
        // console.log(Number(cart.dataset.plyr));
        
    });
}

console.log(positionsInTerrain[1-1]);

const formationInput = document.getElementById('formation');
formationInput.addEventListener('change',()=>changeFormation(formationInput.value))