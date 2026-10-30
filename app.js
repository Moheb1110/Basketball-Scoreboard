
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
const resetButton = document.getElementById("reset-btn");
let homeCurrentScore = 0;
let guestCurrentScore = 0;



function highlightLeader() {
    if (homeCurrentScore > guestCurrentScore) {
        homeScore.style.border = "2px solid #803808";
        guestScore.style.border = "1px solid #fed3c8"
        
    }else if (homeCurrentScore < guestCurrentScore){
        guestScore.style.border = "2px solid #803808";
        homeScore.style.border = "1px solid #fed3c8"
    
    }else if (homeCurrentScore === guestCurrentScore) {
        homeScore.style.border = "1px solid #fed3c8"
        guestScore.style.border = "1px solid #fed3c8"
    }
}

function addOneHome () {
    homeCurrentScore+=1;
    homeScore.innerText = homeCurrentScore;
    highlightLeader();
    }

function addTwoHome () {
    homeCurrentScore+=2;
    homeScore.innerText = homeCurrentScore;
    highlightLeader();
}
function addThreeHome () {
   homeCurrentScore+=3;
   homeScore.innerText = homeCurrentScore;
    highlightLeader();
}


function addOneGuest () {
    guestCurrentScore+=1;
    guestScore.innerText = guestCurrentScore;
    highlightLeader();
    }

function addTwoGuest () {
    guestCurrentScore+=2;
    guestScore.innerText = guestCurrentScore;
    highlightLeader();
}
function addThreeGuest () {
   guestCurrentScore+=3;
   guestScore.innerText = guestCurrentScore;
   highlightLeader();
}



resetButton.addEventListener("click", function (){
    homeCurrentScore = 0;
    guestCurrentScore = 0;
    homeScore.innerText = "0";
    guestScore.innerText = "0";
    highlightLeader();
})

