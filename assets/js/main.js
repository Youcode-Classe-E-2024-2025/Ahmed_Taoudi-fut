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
    list.forEach(plyr => { 
        cart = document.createElement("div");
        cart.className="cart w-full "
        cart.innerHTML=`
           <img class="w-full" src="./assets/img/badge_gold.webp" alt="">
                <div class="w-full h-full flex flex-col items-center justify-center  absolute right-0 top-0 ">
                  <img class="w-2/3"  src="${plyr.photo}" alt="photo of ${plyr.name}">
                  <p class="font-semibold text-[3vw]  sm:text-[10px] ">${plyr.name}</p>
                  <ul class="flex  w-[75%] justify-between">
                    
                    <li >
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">${"PAC"}
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]">${plyr.pace}</span>
                        </p>
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">SHO
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]">${plyr.shooting}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">DRI
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]">${plyr.dribbling}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">PAS
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]">${plyr.passing}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">DEF
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]">${plyr.defending}</span>
                        </p>    
                    </li>
                    <li>
                        <p class="   p-0 text-[2vw] sm:text-[0.5rem] lh">PHY
                            <br>
                            <span class="text-[2.5vw] sm:text-[0.5rem]">${plyr.physical}</span>
                        </p>    
                    </li>
                  </ul>
                </div> `
        document.getElementById('playerList').append(cart);
    
    });
}