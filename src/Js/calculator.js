let oneButton = document.getElementById("one");
let twoButton = document.getElementById("two");
let threeButton = document.getElementById("three");
let fourButton = document.getElementById("four");
let fiveButton = document.getElementById("five");
let sixButton = document.getElementById("six");
let sevenButton = document.getElementById("seven");
let eightButton = document.getElementById("eight");
let nineButton = document.getElementById("nine");
let zeroButton = document.getElementById("zero");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let squareButton = document.getElementById("square");
let squareRootButton = document.getElementById("squareRoot");
let equalButton = document.getElementById("equal");
let screen = document.getElementById("screen");
let answer;
let displayAnswer;
let equal;


// equalButton.onclick =  console.log(answer);


oneButton.onclick  = 1;
twoButton.onclick  = 2;
threeButton.onclick  = 3;
fourButton.onclick  = 4;
fiveButton.onclick  = 5;
sixButton.onclick  = 6;
sevenButton.onclick  = 7;
eightButton.onclick  = 8;
nineButton.onclick  = 9;
zeroButton.onclick  = 0;
multiplyButton.onclick = function(a,b) {
   return a*b
}


answer = (nineButton.onclick) + (twoButton.onclick);

displayAnswer = function () { 
    screen.innerHTML = answer;
    console.log(answer)
    console.log(typeof(answer));
 };
 equalButton.onclick = function () { displayAnswer() }