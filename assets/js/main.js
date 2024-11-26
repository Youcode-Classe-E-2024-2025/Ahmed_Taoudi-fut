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


    let cart ; 
    let test;
    list.forEach(plyr => { 
        if(plyr.position!="GK"){test=1; }else{ test=0;}
        cart = document.createElement("div");
        cart.className="cart w-full "
        cart.innerHTML=`
           <img class="w-full" src="./assets/img/badge_gold.webp" alt="">
                <div class="w-full h-full flex flex-col items-center justify-center  absolute right-0 top-0 ">
                  <img class="w-2/3"  src="${plyr.photo}" alt="photo of ${plyr.name}">
                  <p class="font-semibold text-[3vw]  sm:text-[10px] ">${plyr.name}</p>
                  <ul class="flex  w-[75%] justify-between">
                    
                    <li >
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">${test?"PAC":"DIV"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]"> ${test ? plyr.pace:plyr.diving}</span>
                        </p>
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">${test?"SHO":"HAN"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]">${test ? plyr.shooting:plyr.handling}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">${test?"DRI":"KIC"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]">${test ?plyr.dribbling:plyr.kicking}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">${test?"PAS":"REF"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]">${test ?plyr.passing:plyr.reflexes}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">${test?"DEF":"SPE"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]">${test ?plyr.defending:plyr.speed}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">${test?"PHY":"POS"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]">${test ?plyr.physical:plyr.positioning}</span>
                        </p>    
                    </li>
                  </ul>
                </div> `
        document.getElementById('playerList').append(cart);
    
    });
}