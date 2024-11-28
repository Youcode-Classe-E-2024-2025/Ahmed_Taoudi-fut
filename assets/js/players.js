import { createCArt } from "./modules/playerCart.js";
import { dispalyPlayers, displayDetails, getData, getDataEdit, removeFromList } from "./modules/CRUD.js";
let list = JSON.parse(localStorage.getItem('FUT-players')) || [];

dispalyPlayers(list,'playerList2')
// console.log(d);
document.addEventListener('DOMContentLoaded',()=>{
    const carts=document.querySelectorAll(".p-cart");
    
    

})
function openModelForm(form="add"){
    document.getElementById('overlay').classList.remove('hidden')
    if(form=="add"){
        document.getElementById('modal-form-edit').classList.add('hidden')
       document.getElementById('modal-form-add').classList.remove('hidden')
    }else if(form=="edit"){
        document.getElementById('modal-form-add').classList.add('hidden')
        document.getElementById('modal-form-edit').classList.remove('hidden')
    }
}
document.getElementById('btn-cancel').addEventListener('click',closeModelForm)
document.getElementById('e-btn-cancel').addEventListener('click',closeModelForm)

function closeModelForm(){
    document.getElementById('overlay').classList.add('hidden')
    document.getElementById('form-add').reset();
    document.getElementById('form-edit').reset();
}
document.getElementById('btn-add').addEventListener('click',()=> {openModelForm()})
// document.getElementById('btn-submit-add').addEventListener('',addHandler)
 window.addHandler = function(ev){
    // alert("ok")
ev.preventDefault();
    const newPlayer = getData();
    // console.log(newPlayer);
    list = JSON.parse(localStorage.getItem('FUT-players')) || []; 
    list.push(newPlayer);
    localStorage.setItem('FUT-players',JSON.stringify(list))
    // window.location.reload();
    dispalyPlayers(list,'playerList2')
    // console.log("343434",ev);
    closeModelForm();
}

window.editHandler = function(ev){
    ev.preventDefault();
    const newdata =getDataEdit()
    console.log(newdata);
    list = JSON.parse(localStorage.getItem('FUT-players')) || []; 
    const index = list.findIndex(pl=>pl.id===newdata.id);
    // console.log("old",index,list);
    list.splice(index,1,newdata);
    // console.log("new",index,list);
    localStorage.setItem('FUT-players',JSON.stringify(list))
    dispalyPlayers(list,'playerList2')
    
}

//add



// remove
window.deletePlayer = (event)=>{
    event.stopPropagation();
    event.preventDefault();
    const selectedPlayerID = event.target.closest('button').dataset.playerid;
    // const index = list.findIndex(plyr=>plyr.id==selectedPlayerID);
    // console.log("deletePleyer",index);
    removeFromList(selectedPlayerID);
   //    console.log(213,selectedPlayerID);
}
// console.log(d);

// update
window.updatePlayer = (event)=>{
    event.stopPropagation();
    event.preventDefault();
    const selectedPlayerID = event.target.closest('button').dataset.playerid;
    openModelForm("edit");
    displayDetails(selectedPlayerID);

}
// updatePlayerList(selectedPlayerID);