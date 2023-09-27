let theQuote;
let allQuotes;
let childName;
let result;
let messageBox;
let newMessageButton;
let getQuoteButton;
let copy;
let nameSpace;

// declaring values
theQuote = Math.floor(Math.random()*17);
result =  document.getElementById("result");
newMessageButton  =  document.getElementById("newMessage");
getQuoteButton =  document.getElementById("getQuote");
messageBox = document.getElementById("message");
copy = document.getElementById("copy");
nameSpace = document.getElementById("childName");


allQuotes = ["To my shining star, child, your potential is limitless. Keep believing in yourself, and you'll achieve amazing things! 🌟 Love, Mom",

"Life is an adventure, child, and you are the bravest explorer. Mom is here to celebrate every step of your journey! 🗺️❤️", 

"You are my heart's delight, child. Your kindness and love brighten our world. Mom is so grateful to have you! 💖",

"Remember, child, you have the power to make the world a better place. Keep spreading love and kindness. 🌍😊 Love, Mom",

"Dear child, when I count my blessings, you are at the top of my list. Your smile is my sunshine! ☀️ Love, Mom",

"You're growing so fast, child, but you'll always be my little one. Keep dreaming big and soaring high! 🚀💙 Love, Mom",

"As you face each day's adventures, know that Mom's love is your constant support, child. You're never alone. 🌠❤️",

"To my superhero in training, child, you have the strength and courage to conquer any challenge. Mom believes in you! 💪🦸‍♂️",

"My darling child, your smile lights up my world. Keep being the amazing person you are! 😊 Love, Mom",

"You make my heart swell with pride, child. Your laughter is my favorite melody. Keep being your wonderful self! 🎶❤️",

"Life can be busy, but never forget that you're the most important part of it, child. Mom's here, always. 🌼",

"To my little explorer, child, the world is your playground. Dream, discover, and know that I'm here to support you! 🌎❤️",

"Every day with you is a blessing, child. You are cherished more than words can express. Love, Mom 💞",

"You're not just growing up, child, you're growing amazing. Keep reaching for the stars! 🌠 Love, Mom",

"Dear child, you are a gift to this world. Mom is here to guide you, love you, and be your biggest fan! ",

 "No matter where life takes you, child, remember you are cherished and adored. Mom's love is always with you. 🌟💕",
];

//Resetting
result.style.display = "none";


 

let fillChildName = function () { 
    firstQuote = allQuotes[theQuote]
    secondQuote = firstQuote.replace("child", document.getElementById("childName").value );
    messageBox.innerHTML = secondQuote ;
 }

// get quote
getQuoteButton.onclick =  function (){
    result.style.display = "initial";
    copy.style.display = "none"
    fillChildName() 
};


// get new quote
newMessageButton.onclick = function (){
    copy.style .display = "initial";
    result.style.display = "none";
    document.getElementById("childName").value = "";
};
 


