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
        cart.className="cart "
        cart.innerHTML=`
            <img class="w-full " src="./assets/img/badge_gold.webp" alt="">
div
        <img class="w-full " src="${plyr.photo}" alt="photo of ${plyr.name}">
        <p class="font-bold ">${plyr.name}</p>
        `
        document.getElementById('playerList').append(cart);

    });
}