import { createCArt, createCartForTerrain } from "./playerCart.js";

let list = JSON.parse(localStorage.getItem('FUT-players')) || [];


export function getData() {
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
  

  export function removeFromList(selectedPlayerID){

    // list.splice(index,1);
    list =list.filter(p=>p.id!==selectedPlayerID)
    // console.log("removeFromList",index);
    // console.log(list.map(e=>e.id+"  --  "+e.name));
    localStorage.setItem('FUT-players', JSON.stringify(list));
    // console.log("eeee");
    dispalyPlayers(list,'playerList2');

  }


export function dispalyPlayers(list,zone ='playerList'){

    document.getElementById(zone).innerHTML='';
    if(zone=='playerList'){
    list.forEach(plyr =>  document.getElementById(zone).append(createCartForTerrain(plyr)));
    }else{
    list.forEach(plyr =>  document.getElementById(zone).append(createCArt(plyr)));
    }
}