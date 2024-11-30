


export function ValidatePos(players,Pos){
    let savedFormation = JSON.parse(localStorage.getItem('FUT-formation')) || defaultFormation ;
    Object.values(savedFormation.players).includes('24')
    players.forEach(plyr=> {
        // console.log("list : ",Object.values(savedFormation.players),"id : ",plyr.dataset.id);
        if(Object.values(savedFormation.players).includes(plyr.dataset.id)){
              plyr.classList.add('hidden');
            }
        else if(plyr.dataset.position==Pos){

            plyr.classList.remove('hidden');
        }else{
            plyr.classList.add('hidden');
        }
    })
}