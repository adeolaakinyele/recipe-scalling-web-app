let copy; // section for copy
let startButton; // start button
let userAnswer; // input from the user
let submitButton;// submit answer
let gameSection; 
let riddle; //value for the riddles in the array
let riddleBox; // space to display the riddle
let currentRiddle;// index number for the riddle
let allRiddles; // name for the array containing the riddles
let theRiddles; // key:value for the riddle
let displayRiddle;// function to display riddle
let checkAnswer;// function to check answer
let result;// space to display the result for check answer
let nextButton; // to move to the next riddle
let scores;// scored points
let rewards;// space to display reward to claim after quiz
let claimRewards;// function containing the reward
let lives;// number of lives at each question
let startAgain; // to restart the gain after game over
let answerStyle; // exlores answers format the user can give such as upper case lower case, sentence case
let gameStart;
let gameOver; // when liveS = 0

// list of riddles
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
  answer : "Suya"
},

{
  riddle: `I'm wrapped in leaves, with flavors so bold,
  Inside, a mixture of goodies untold,
  I'm steamed or boiled, a delicacy divine,
  In Nigerian cuisine, I truly shine.
  What am I?`,
  answer : "Moin Moin"
},

{
  riddle: `I'm a Nigerian delight, often served at celebrations so bright,
  With jollof rice or fried rice, I make a perfect pair,
  I'm made from plantains, sliced and fried with care.
  What am I?`,
  answer : "Dodo"
},

{
  riddle: `I'm a traditional Nigerian soup, thick and green,
  Made from ground melon seeds, a delicious scene,
  With vegetables and sometimes meat, I'm cooked with care,
  What am I, a Nigerian favorite to share?`,
  answer : "Egusi"
},

{
  riddle: `I'm a leafy green, a popular choice,
  In Nigerian soups, I add a distinct voice,
  With a slightly bitter taste and lots of flair,
  Guess my name, used in soups everywhere.`,
  answer : "Bitter leaves"
},

{
  riddle: `I'm a sweet delight, often served in a bowl,
  Made from millet or corn, with a texture that's whole,
  Sugar, milk, and spices, in me they're mixed,
  What am I, a warm treat that's often nixed?`,
  answer : "Pap"
},

{
  riddle: `I'm a pungent condiment with a strong appeal,
  In Nigerian dishes, I make flavors real,
  Gotten from the oceans, a taste that's bold,
  What am I, enhancing dishes manifold?`,
  answer : "Crayfish"
},


{
  riddle: `I'm a condiment with a tangy delight,
  Used in Nigerian sauces, a flavorful bite,
  Made from fermented locust beans so fine,
  What is my local name, in Nigerian dishes, I entwine?`,
  answer : "Iru"
},

{
  riddle: `I'm a famous Nigerian snack, crispy and light,
  Fried until golden brown, a delicious sight,
  Made from bean batter with spices galore,
  What am I, enjoyed by many, for sure??`,
  answer : "Akara"
},

];

copy = document.getElementById("copy");
startButton = document.getElementById("start");
gameSection = document.getElementById("gameSection");
riddleBox = document.getElementById("riddle");
userAnswer = document.getElementById("answer");
submitButton = document.getElementById("submit");
nextButton = document.getElementById("next");
result = document.getElementById("result");
scores = document.getElementById("scores");
rewards = document.getElementById("claimRewards");
startAgain = document.getElementById("startAgain");

//Reseting values
gameSection.style.display = "none";
nextButton.style.display = "none"
rewards.style.display = "none"; 
startAgain.style.display = "none";
result.style.display = "none"

// declaring values and functions
currentRiddle = 0;
scores = 0;
lives = 3; // number of lives given
let theRiddle = allRiddles[currentRiddle];

// display riddle
displayRiddle = function () { 
    riddleBox.innerHTML = theRiddle.riddle;
 };
  
// convert string to upper case
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
};

 // answer style : allows different answer styles
answerStyle = function(){ 
  if (
    userAnswer.value == theRiddle.answer ||
    userAnswer.value == theRiddle.answer.toUpperCase() ||
    userAnswer.value == theRiddle.answer.toLowerCase() ||
    userAnswer.value == titleCase(theRiddle.answer)) {
    return true;
  } else {
    return false;
  }
};

// checkAnswer
checkAnswer = function () { 
  switch (answerStyle()) {
    case true:
      if (lives > 0) {
      result.style.display = "initial";
      nextButton.style.display = "initial";
      scores += 20;
      result.innerHTML = `correct!\n Your current scores is ${answerStyle()} ${scores}`;
      gameSection.style.display = "none";
      userAnswer.value = ""; 
      }
       break;

    case false:
      if (lives > 0) { 
      gameSection.style.display = "initial";
      result.style.display = "initial";
      result.innerHTML = `wrong answer! \n try again! you can do this \n You got ${lives} lives left !`;
      userAnswer.value = "";
      lives -=1;
      return lives;
      }
      break;
    
    default:
      
  }
};

// nextRiddle
let nextRiddle = function (){
  if (scores == 100 & lives > 0) {
    claimRewards()
  }
  else
  {currentRiddle +=1 // to move to the next riddle using index number
  theRiddle = allRiddles[currentRiddle];
  gameSection.style.display = "initial";
  riddleBox.innerHTML = theRiddle.riddle;
  result.style.display = "none";
  nextButton.style.display = "none";

  };
};

// claim rewards
claimRewards = function (){
  result.style.display = "none";
  nextButton.style.display = "none";
  rewards.style.display = "initial"
  let money = 1000000;
  let naira = money.toLocaleString("en-US", {style:"currency", currency:"NGN"});
  rewards.innerHTML = `Congratulations, your score is ${scores} and you have won ${naira}  `;
};


//runGame
runGame = function(){
  for(let riddle of allRiddles){
    displayRiddle()
    submitButton.onclick = function (){
      if(lives == 0){
        gameOver()
      }
      else{
        checkAnswer()
      }
      
  };
    nextButton.onclick = function () { 
      nextRiddle()  
  };
  };
};

//gameStart
gameStart = function () { gameSection.style.display = "initial";
copy.style.display = "none";
result.style.display ="none"
rewards.style.display = "none"
runGame();
}; 


// game over to end game when lives =0
gameOver = function () {
  gameSection.style.display = "none";
  result.style.display = "initial";
  result.innerHTML = `Opps! you have exhausted your lives! \n  start try again! you can do this`;
  startAgain.style.display = "initial"
};

// startButton
startButton.onclick = function (){ gameStart();
};

// start
startAgain.onclick = function () { startButton.onclick()
  startAgain.style.display = "none";
  result.style.display = "none";
  userAnswer.value = "" 
  lives = 3
};