import { createCArt, createCartForTerrain } from "./playerCart.js";

let list = JSON.parse(localStorage.getItem('FUT-players')) || [];


export function  displayDetails(selectedPlayerID){
    list = JSON.parse(localStorage.getItem('FUT-players')) || [];
    const selectedPlyer = list.find(plyr=>plyr.id==selectedPlayerID);
      document.getElementById('e-id').value= selectedPlyer.id  ;
      document.getElementById('e-name').value= selectedPlyer.name  ;
      document.getElementById('e-photo').value= selectedPlyer.photo  ;
      document.getElementById('e-position').value= selectedPlyer.position  ;
      document.getElementById('e-nationality').value= selectedPlyer.nationality  ;
      document.getElementById('e-club').value= selectedPlyer.club  ;
      document.getElementById('e-logo').value= selectedPlyer.logo  ;
      document.getElementById('e-flag').value= selectedPlyer.flag  ;
      document.getElementById('e-rating').value = selectedPlyer.rating  ;
      document.getElementById('e-pace').value = selectedPlyer.pace  ;
      document.getElementById('e-shooting').value = selectedPlyer.shooting  ;
      document.getElementById('e-passing').value = selectedPlyer.passing  ;
      document.getElementById('e-dribbling').value = selectedPlyer.dribbling  ;
      document.getElementById('e-defending').value = selectedPlyer.defending  ;
      document.getElementById('e-physical').value = selectedPlyer.physical  ; 

}

export function getData() { 
    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').value;
    const position = document.getElementById('position').value;
    const nationality = document.getElementById('nationality').value;
    const club = document.getElementById('club').value;
    const logo = document.getElementById('logo').value;
    const flag = document.getElementById('flag').value;
    const rating = parseInt(document.getElementById('rating').value, 10);
    const pace = parseInt(document.getElementById('pace').value, 10);
    const shooting = parseInt(document.getElementById('shooting').value, 10);
    const passing = parseInt(document.getElementById('passing').value, 10);
    const dribbling = parseInt(document.getElementById('dribbling').value, 10);
    const defending = parseInt(document.getElementById('defending').value, 10);
    const physical = parseInt(document.getElementById('physical').value, 10); 

    // const flag = `https://cdn.sofifa.net/flags/nl.png`;
   
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

  export function getDataEdit() { 
    const id = document.getElementById('e-id').value;
    const name = document.getElementById('e-name').value;
    const photo = document.getElementById('e-photo').value;
    const position = document.getElementById('e-position').value;
    const nationality = document.getElementById('e-nationality').value;
    const club = document.getElementById('e-club').value;
    const logo = document.getElementById('e-logo').value;
    const flag = document.getElementById('e-logo').flag;
    const rating = parseInt(document.getElementById('e-rating').value, 10);
    const pace = parseInt(document.getElementById('e-pace').value, 10);
    const shooting = parseInt(document.getElementById('e-shooting').value, 10);
    const passing = parseInt(document.getElementById('e-passing').value, 10);
    const dribbling = parseInt(document.getElementById('e-dribbling').value, 10);
    const defending = parseInt(document.getElementById('e-defending').value, 10);
    const physical = parseInt(document.getElementById('e-physical').value, 10); 
   
   
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
    list = JSON.parse(localStorage.getItem('FUT-players')) || []; 
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