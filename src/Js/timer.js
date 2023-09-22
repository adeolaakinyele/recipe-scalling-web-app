// time for cooking
let SetTime; 


// declaring the countdown for mins and sec
function countdown() {
    if (SetTime == 0) {
      document.getElementById("Timer").innerHTML = "Your Jollof is ready"
    } else {
        document.getElementById("Timer").innerHTML = Math.floor(SetTime/60)+ '  Mins' + " " + (SetTime % 60) + '  Secs to your delicious jollof';
        SetTime--;  
    }
  }

 // declaring the interval for countdown in seconds. 1000 milliseconds = 1 second

let startCountDown = function() {setInterval(countdown, 1000);} 

// on click action
document.getElementById('startButton').onclick = function(){SetTime = (Number(document.getElementById("timeInput").value)*60);
    startCountDown();
};
