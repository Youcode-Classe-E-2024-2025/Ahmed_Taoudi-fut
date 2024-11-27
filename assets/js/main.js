import { createCArt } from "./modules/playerCart.js";
import {  positionsInTerrain } from "./modules/positions.js";

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
const formations={
    "4-3-3" : {
        "1":{top:"20%",left:"20%"},
        "2":{top:"20%",left:"50%"},
        "3":{top:"20%",left:"80%"},

        "4":{top:"50%",left:"20%"},
        "5":{top:"50%",left:"50%"},
        "6":{top:"50%",left:"80%"},

        "7":{top:"70%",left:"20%"},
        "8":{top:"70%",left:"40%"},
        "9":{top:"70%",left:"60%"},
        "10":{top:"70%",left:"80%"},
        "11":{top:"90%",left:"50%"} 
    },
    
    "4-4-2" :{
        "1":{top:"20%",left:"30%"},
        "2":{top:"20%",left:"70%"},
        "3":{top:"50%",left:"20%"},
        "4":{top:"50%",left:"40%"},
        
        "5":{top:"50%",left:"60%"},
        "6":{top:"50%",left:"80%"},
        "7":{top:"70%",left:"20%"},
        "8":{top:"70%",left:"40%"},
        "9":{top:"70%",left:"60%"},
        "10":{top:"70%",left:"80%"},
        "11":{top:"90%",left:"50%"} 
    }
   
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