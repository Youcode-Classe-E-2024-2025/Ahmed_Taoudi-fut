


export function ValidatePos(players,Pos){
    players.forEach(plyr=> {
        if(plyr.dataset.position==Pos){
            plyr.classList.remove('hidden');
        }else{
            plyr.classList.add('hidden');
        }
    })
}