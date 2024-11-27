import { createCArt, createCartForTerrain } from "./modules/playerCart.js";
import {  changeFormation } from "./modules/positions.js";

console.log("aaaaaa");
 let list =[];
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
    localStorage.setItem('FUT-players', JSON.stringify(list));
    // console.log("list",list);
    dispalyPlayers(list);
    enventHandle();
   }
}
)
.catch(err => console.error("error de fetch ",err))

function dispalyPlayers(list){


    
    list.forEach(plyr =>  document.getElementById('playerList').append(createCArt(plyr)));
}

function enventHandle(){
    const btns = document.querySelectorAll('.btn-add-to-terrain')
    btns.forEach(btn=>{
        btn.addEventListener('click',openModel)
    })
    document.querySelector('#modal-palyersList').addEventListener('click',(event)=>{event.stopPropagation();})
    
}

function openModel(event){
    const overlay =document.getElementById('overlay');
    overlay.classList.remove('hidden');
    overlay.classList.add('flex')
    overlay.addEventListener('click',closeModel)
    // console.log(event.target.closest('.cart-terrain'));
    const cart = event.target.closest('.cart-terrain');
//    console.log( cart.querySelector('img'));
     const button =cart.querySelector('button');
     button.innerHTML='';
     button.append(createCartForTerrain(list[0]));
}
function closeModel(){
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('overlay').classList.remove('flex');
}




// console.log(positionsInTerrain[1-1]);

const formationInput = document.getElementById('formation');
formationInput.addEventListener('change',()=>{
    if(formationInput.value !='-1'){changeFormation(formationInput.value);}})