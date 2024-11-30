let cart ; 
let test;
export function createCArt(plyr){
    if(plyr.position!="GK"){test=1; }else{ test=0;}
    cart = document.createElement("div");
    cart.className="p-cart relative hover:scale-105  w-full "
    cart.dataset.id=`${plyr.id}`;
    cart.innerHTML=`
     <div class="absolute z-20 top-[20%] right-[0%]  flex gap-4 flex-col">
        <button onclick="deletePlayer(event)" data-playerid="${plyr.id}" type="button">
              <svg class="size-4 fill-white hover:fill-red-500 hover:scale-105 " data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" fill-rule="evenodd"></path>
              </svg>
        </button>
        <button onclick="updatePlayer(event)"  data-playerid="${plyr.id}" type="button">
              <svg class="size-4 fill-white hover:fill-yellow-500 hover:scale-105 " data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z"></path>
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z"></path>
              </svg>
      </button>
    </div>
       <img class="w-full" src="./assets/img/badge_gold.webp" alt="">
            <div class="w-full h-full flex flex-col items-center justify-center  absolute right-0 top-0 ">
             <div class="w-full  ">
       <img class="mx-auto w-2/3"  src="${plyr.photo}" alt="photo of ${plyr.name}">
       <p class=" absolute top-[25%] left-[12%]   p-0 text-[2vw] sm:text-[.8rem] font-semibold ">${plyr.position}
        <br>
        <span class="text-[4vw] sm:text-[1rem] font-extrabold">${ plyr.rating}</span>
    </p>
   </div>
            <p class="font-semibold text-[3vw]  sm:text-[0.68rem] ">${plyr.name}</p>
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
            </div> `;
            return cart;
   
}
export function createCartForTerrain(plyr){
    
    cart = document.createElement("div");
    cart.dataset.id=`${plyr.id}`;
    cart.dataset.position=`${plyr.position}`;
     
    cart.className="p-cart"
   
    cart.innerHTML=`
                <div class="relative ">

                        <img src="./assets/img/badge_gold.webp" alt="player">
                        <div  class="player-img absolute top-[10%] right-0  w-full">
                            <img class="mx-auto w-4/5" src="${plyr.photo}" alt="">
                            </div>
                            <p class=" mx-[5%] font-semibold text-black  rounded bg-yellow-300 text-[0.5rem]  sm:text-[0.4rem] ">${plyr.name}</p>
                 </div>
                 `;
                 return cart;
                 //  <p class="text-white  font-semibold text-[.6rem]" >${plyr.name}</p>
                 
}
// `
// <li class="text-white  mb-2 flex items-stretch"><button class="btn-select-player flex justify-between p-1 px-8 sm:px-4 items-center cursor-pointer hover:bg-slate-800 w-full bg-slate-600 transition-colors flex-row text-2xl sm:text-[8px] lg:text-base xl:text-lg" data-name="${plyr.name}"><img class="w-20 sm:w-10" src="${plyr.photo}"/><span>${plyr.name.split(' ').slice(1)}</span> <span>${plyr.position}</span></button></li>
// `
export function createCartForTerrainList(plyr){
    
    cart = document.createElement("div");
    cart.dataset.id=`${plyr.id}`;
    cart.dataset.position=`${plyr.position}`;
     
    cart.className="p-cart h-20  bg-slate-500 hover:scale-101  m-1"
   
    cart.innerHTML=`
                <div class="flex justify-between items-center ">
 
                        <div  class="player-img   h-full">
                            <img class=" border h-16 " src="${plyr.photo}" alt="${plyr.name}">
                        </div> 
                            <p class=" mx-[5%] font-semibold text-white   ">${plyr.name}</p>
                            <p class=" mx-[5%] font-semibold text-white  ">${plyr.position}</p>

                         
                 </div>
                 
                 `;
                 return cart;
                 
}