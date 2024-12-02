


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
const regex = /^[A-Za-z][A-Za-z'\s-]*$/; // ahmed-tt :true    ahmed10 :false

export function validateValue(value,messageIndex){
    if (!regex.test(value)) {
        // console.log(value,false);
        // alert("Value should only contain letters, spaces, apostrophes, or hyphens!");
        document.querySelector(`#${messageIndex}`).classList.remove('hidden');
        return false;
    }else{
        // console.log(value,true);
        document.querySelector(`#${messageIndex}`).classList.add('hidden');
        // alert(value);

        return true;
    }
}