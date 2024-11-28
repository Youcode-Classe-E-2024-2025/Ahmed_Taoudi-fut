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
document.getElementById('btn-submit-add').addEventListener('click',addHandler)
function addHandler(){
    // alert("ok")
    document.getElementById('overlay').classList.add('hidden')
}

//add



// remove
// console.log(d);

// update