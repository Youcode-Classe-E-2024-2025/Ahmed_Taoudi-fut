import { dispalyPlayers } from "./modules/CRUD.js";
import { createCArt, createCartForTerrain } from "./modules/playerCart.js";
import {  changeFormation , defaultFormation, showFormation, updatePlayerLocalStorage } from "./modules/positions.js";
import { ValidatePos } from "./modules/validation.js";



console.log("aaaaaa"); 
 let list =JSON.parse(localStorage.getItem('FUT-players')) || [];
 let savedFormation = JSON.parse(localStorage.getItem('FUT-formation')) || defaultFormation ;
//   /assets/data/players.json
fetch("https://tawdi.github.io/FUT-api/players.json")
.then(rep => {
    if(!rep.ok){
        console.error(`HTTP error! Status: ${rep.status}`);
        return;
    }
    return rep.json();
})
.then( data =>{
   if(data){ console.log(data);
   if(list.length==0){
    list =data.players;
    localStorage.setItem('FUT-players', JSON.stringify(list));
   }
    // console.log("list",list);
    showFormation(savedFormation,list);
    dispalyPlayers(list);
}
}
)
.catch(err => console.error("error de fetch ",err))



enventHandle();



function enventHandle(){
    const btns = document.querySelectorAll('.btn-add-to-terrain')
    btns.forEach(btn=>{
        btn.addEventListener('click',openModel)
    })
    document.querySelector('#modal-palyersList').addEventListener('click',(event)=>{event.stopPropagation();})
    
}

const overlay =document.getElementById('overlay');
overlay.addEventListener('click',closeModel);
// 
document.getElementById('btn-close-modul').addEventListener('click',closeModel)

function openModel(ev){
    ev.preventDefault();
    let cartTerrain; 

    overlay.classList.remove('hidden');
    overlay.classList.add('flex')

    const players= overlay.querySelectorAll('.p-cart');
    const selectedPos= ev.target.closest('.cart-terrain').dataset.pos;
    const selectedCartNumber= ev.target.closest('.cart-terrain').dataset.plyr;
    const handler = (event)=>{
        // console.log("frfrfr",cartTerrain);
         cartTerrain = ev.target.closest('.cart-terrain');
        // console.log( "CART",cartTerrain.dataset);
        // console.log("fn",cartTerrain);
        const cart = event.target.closest('.p-cart'); 
        const selctedPlayerIndex =list.findIndex(plyr=>plyr.id==cart.dataset.id) ;
        updatePlayerLocalStorage(selectedCartNumber,cart.dataset.id);
        replaceCart(cartTerrain,selctedPlayerIndex,list);

    } 
    ValidatePos(players,selectedPos)


    players.forEach(plyrCArt=>plyrCArt.addEventListener('click',handler));
    window.handler = handler;
    // console.log(event.target.closest('.cart-terrain'));
}
function replaceCart(cartTerrain,index,list){ 
    // console.log("replace",cartTerrain);

//    console.log( cart.querySelector('img'));
     const button = cartTerrain.querySelector('button');
     button.dataset.status='1'
     button.innerHTML='';
     button.append(createCartForTerrain(list[index]));
     closeModel();
    return;

}
function closeModel(){

     if (window.handler) {
        document.querySelectorAll('.p-cart').forEach(plyrCart => {
            plyrCart.removeEventListener('click', window.handler);
        });
    }
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('overlay').classList.remove('flex');
    
}




// console.log(positionsInTerrain[1-1]);

const formationInput = document.getElementById('formation');
formationInput.addEventListener('change',()=>{
    if(formationInput.value !='-1'){changeFormation(formationInput.value);}})