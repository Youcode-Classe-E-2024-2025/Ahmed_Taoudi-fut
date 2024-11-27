

export const positionsInTerrain= [
     document.getElementById("player-1"),
     document.getElementById("player-2"),
     document.getElementById("player-3"),
     document.getElementById("player-4"),
     document.getElementById("player-5"),
     document.getElementById("player-6"),
     document.getElementById("player-7"),
     document.getElementById("player-8"),
     document.getElementById("player-9"),
     document.getElementById("player-10"),
     document.getElementById("player-11")

]



export const formations={
    "4-3-3" : {
        "1":{top:"20%",left:"20%"},
        "2":{top:"20%",left:"50%"},
        "3":{top:"20%",left:"80%"},

        "4":{top:"50%",left:"20%"},
        "5":{top:"50%",left:"50%"},
        "6":{top:"50%",left:"80%"},

        "7":{top:"70%",left:"20%"},
        "8":{top:"70%",left:"40%"},
        "9":{top:"70%",left:"60%"},
        "10":{top:"70%",left:"80%"},
        "11":{top:"90%",left:"50%"} 
    },
    
    "4-4-2" :{
        "1":{top:"20%",left:"30%"},
        "2":{top:"20%",left:"70%"},
        "3":{top:"50%",left:"20%"},
        "4":{top:"50%",left:"40%"},
        
        "5":{top:"50%",left:"60%"},
        "6":{top:"50%",left:"80%"},
        "7":{top:"70%",left:"20%"},
        "8":{top:"70%",left:"40%"},
        "9":{top:"70%",left:"60%"},
        "10":{top:"70%",left:"80%"},
        "11":{top:"90%",left:"50%"} 
    }
   
}

export function changeFormation(frm){
    positionsInTerrain.forEach(cart => {
        changePositionOfPlayer(cart,frm)
        // console.log(Number(cart.dataset.plyr));
        
    });
}

export function changePositionOfPlayer(cart,frm){
    cart.style.top=formations[frm][cart.dataset.plyr].top
    cart.style.left=formations[frm][cart.dataset.plyr].left
    // cart.style.left='z' 
 }