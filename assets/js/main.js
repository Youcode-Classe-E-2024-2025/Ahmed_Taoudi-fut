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
console.log("list",list);
    dispalyPlayers(data)
   }
}
)
.catch(err => console.error("error de fetch ",err))

function dispalyPlayers(data){

}