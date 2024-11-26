console.log("aaaaaa");
fetch("/assts/data/players.json")
.then(rep => {
    if(!rep.ok){
        console.error(`HTTP error! Status: ${rep.status}`);
        return;
    }
    return rep.json();
})
.then( data =>{
   if(data){ console.log(data);
    dispalyPlayers(data)
   }
}
)
.catch(err => console.error("error de fetch ",err))