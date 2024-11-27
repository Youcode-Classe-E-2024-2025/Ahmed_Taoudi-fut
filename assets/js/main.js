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
                 <div class="w-full  ">
           <img class="mx-auto w-2/3"  src="${plyr.photo}" alt="photo of ${plyr.name}">
           <p class=" absolute top-[25%] left-[15%]   p-0 text-[2vw] sm:text-[0.5rem] font-semibold ">${plyr.position}
            <br>
            <span class="text-[4vw] sm:text-[1rem] font-extrabold">${ plyr.rating}</span>
        </p>
       </div>
                <p class="font-semibold text-[3vw]  sm:text-[0.8rem] ">${plyr.name}</p>
                  <ul class="flex px-2  w-[75%] justify-between">
                    
                    <li >
                        <p class="   p-0 text-[2vw] sm:text-[0.4rem] font-semibold ">${test?"PAC":"DIV"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.6rem] font-extrabold"> ${test ? plyr.pace:plyr.diving}</span>
                        </p>
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.4rem] font-semibold ">${test?"SHO":"HAN"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.6rem] font-extrabold">${test ? plyr.shooting:plyr.handling}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.4rem] font-semibold ">${test?"DRI":"KIC"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.6rem] font-extrabold">${test ?plyr.dribbling:plyr.kicking}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.4rem] font-semibold ">${test?"PAS":"REF"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.6rem] font-extrabold">${test ?plyr.passing:plyr.reflexes}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.4rem] font-semibold ">${test?"DEF":"SPE"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.6rem] font-extrabold">${test ?plyr.defending:plyr.speed}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.4rem] font-semibold ">${test?"PHY":"POS"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.6rem] font-extrabold">${test ?plyr.physical:plyr.positioning}</span>
                        </p>    
                    </li>
                  </ul>
                   <div class=" w-full justify-center items-center gap-6 flex">
        <div class="w-1/12" >
            <img class="w-full" src=" ${plyr.logo} " alt="${plyr.club}">
        </div>
        <div class="w-1/12" >
            <img class="w-full" src="${plyr.flag}" alt="${plyr.nationality}">
        </div>
       </div>
                </div> `
        document.getElementById('playerList').append(cart);
    
    });
}