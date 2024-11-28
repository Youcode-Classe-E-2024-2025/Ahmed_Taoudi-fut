import { createCArt } from "./modules/playerCart.js";

let list = JSON.parse(localStorage.getItem('FUT-players')) || [];
function dispalyPlayers(list){
    
    
    
    list.forEach(plyr =>  {
        document.getElementById('playerList2').append(createCArt(plyr))
    });
}
dispalyPlayers(list)
// console.log(d);
document.addEventListener('DOMContentLoaded',()=>{
    const carts=document.querySelectorAll(".p-cart");
    
    carts.forEach(cart=>{
        cart.addEventListener('click',()=>{
            openModelForm();
        })
    })

})
function openModelForm(){
    document.getElementById('overlay').classList.remove('hidden')
}
document.getElementById('btn-cancel').addEventListener('click',closeModelForm)
function closeModelForm(){
    document.getElementById('overlay').classList.add('hidden')
}
document.getElementById('btn-add').addEventListener('click',openModelForm)
// document.getElementById('btn-submit-add').addEventListener('',addHandler)
 window.addHandler = function(ev){
    // alert("ok")
ev.preventDefault();
    const newPlayer = getData();
    // console.log(newPlayer);
    list.push(newPlayer);
    localStorage.setItem('FUT-players',JSON.stringify(list))
    // console.log("343434",ev);
    document.getElementById('overlay').classList.add('hidden')
}

function getData() {
    // Get form elements
    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').value;
    const position = document.getElementById('position').value;
    const nationality = document.getElementById('nationality').value;
    const club = document.getElementById('club').value;
    const logo = document.getElementById('logo').value;
    const rating = parseInt(document.getElementById('rating').value, 10);
    const pace = parseInt(document.getElementById('pace').value, 10);
    const shooting = parseInt(document.getElementById('shooting').value, 10);
    const passing = parseInt(document.getElementById('passing').value, 10);
    const dribbling = parseInt(document.getElementById('dribbling').value, 10);
    const defending = parseInt(document.getElementById('defending').value, 10);
    const physical = parseInt(document.getElementById('physical').value, 10); 

    const flag = `https://cdn.sofifa.net/flags/nl.png`;
   
    const id = 'p-'+Date.now();
   
    return {
      id,
      name,
      photo,
      position,
      nationality,
      flag,
      club,
      logo,
      rating,
      pace,
      shooting,
      passing,
      dribbling,
      defending,
      physical
    };
    
  }
  

//add



// remove
// console.log(d);

// update