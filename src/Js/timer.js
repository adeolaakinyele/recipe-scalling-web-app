// time for cooking
let SetTime; 


// declaring the countdown for mins and sec
function countdown() {
    if (SetTime == 0) {
      document.getElementById("timer").innerHTML = "Your Jollof rice is ready!"
      // emoji
        + `&#x1F958;`+ `&#x1F372;`;
      document.getElementById("timer").style.fontSize = "50px";
      document.getElementById("timer").style.fontWeight = "700";
      document.getElementById("timer").style.lineHeight = "4rem";
    } 
    
    else {
        document.getElementById("minsTimer").innerHTML = Math.floor(SetTime/60);
        document.getElementById("mins").innerHTML = "mins";
        document.getElementById("secsTimer").innerHTML = (SetTime % 60);
        document.getElementById("secs").innerHTML = "secs"
        SetTime--;  
    }
  }

 // declaring the interval for countdown in seconds. 1000 milliseconds = 1 second

let startCountDown = function() {setInterval(countdown, 1000);} 

// on click action
document.getElementById('startButton').onclick = function(){SetTime = (Number(document.getElementById("timeInput").value)*60);
    startCountDown();
};
