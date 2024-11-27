import { createCArt } from "./modules/playerCart.js";
import {  changeFormation } from "./modules/positions.js";

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






// console.log(positionsInTerrain[1-1]);

const formationInput = document.getElementById('formation');
formationInput.addEventListener('change',()=>changeFormation(formationInput.value))