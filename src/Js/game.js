let copy;
let start;
let answer;
let submit;
let gameSection;
let riddle;
let riddleBox;
let currentRiddle;
let allRiddles;
let displayRiddle;
let checkAnswer;
let answers;
let result;
let next;
let scores;


allRiddles = [{
  riddle: `In Nigerian stews and soups,\n you'll find me there,\n
  I'm a spicy little pepper,\n with a fiery glare,\n
  Red or green,\n I bring the heat,\n
  Guess my name,\n I'm a taste treat!\n
  What am I?`,
  answer :  "Scotch Bonnet pepper"
},

{
  riddle: `I'm a Nigerian street food, a tasty delight\n,
  Spiced with peppers, onions, and more, just right\n,
  Folded in a paper or served on a plate\n,
  What am I, a quick, savory, and spicy fate?`,
  answer : "Suya "
},

{
  riddle: `I'm wrapped in leaves, with flavors so bold,
  Inside, a mixture of goodies untold,
  I'm steamed or boiled, a delicacy divine,
  In Nigerian cuisine, I truly shine.
  What am I?`,
  answer : "Moin Moin"
},

];

copy = document.getElementById("copy");
start = document.getElementById("start");
gameSection = document.getElementById("gameSection");
riddleBox = document.getElementById("riddle");
answer = document.getElementById("answer");
submit = document.getElementById("submit");
next = document.getElementById("next")
result = document.getElementById("result")
scores = document.getElementById("scores")
gameSection.style.display = "none";
next.style.display = "none"


currentRiddle = 0;
scores = 0;
let theRiddle = allRiddles[currentRiddle];

displayRiddle = function () { 
    riddleBox.innerHTML = theRiddle.riddle;
 };


 checkAnswer = function () { 
    if(answer.value == theRiddle.answer){
    currentRiddle++
    scores += 20;
    result.innerHTML = `correct!\n Your current scores is ${scores}`;
    gameSection.style.display = "none";
    next.style.display = "initial";
  }
  else{
    result.innerHTML = "wrong answer! \n try again! \n You got this!"
  }
};

start.onclick = function () { gameSection.style.display = "initial"; 
  copy.style.display = "none";
  displayRiddle()
};


submit.onclick = function (){
    checkAnswer()
};

next.onclick = function (){
  gameSection.style.display = "initial";
  riddleBox.innerHTML = theRiddle.riddle;
  result.style.display = "none";
  next.style.display = "none";
  console.log(currentRiddle);
}





// displayRiddle = function () {
//     for (let key in allRiddles) {
//         return allRiddles[key];
//   }   
// };

// answers = function(){
//     for (let key in allRiddles) {
//         return key;
//     }
// };

// checkAnswer = function(){
//     switch (answer.value) {
//         case answers():
//           alert("Correct")
//           break;
//         case answers().toUpperCase():
//           alert("Correct")
//           break;
//         case answers().toLowerCase():
//           alert("Correct")
//           break;
//         default:
//           alert("You have provided a wrong answer, try again")
//       }
// };


start.onclick = function () { gameSection.style.display = "contents"; 
copy.style.display = "none";
riddle.innerHTML = displayRiddle()
};
submit.onclick = function (){
        checkAnswer()

}

