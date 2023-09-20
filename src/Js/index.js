// app logic
let serving;
// Declaring the ingredients

// stew base
let tomatoGrams;
let tomatoSize;
let redBellPepperGrams;
let redBellPepperSize;
let onionGrams;
let onionSize;
let tomatoPaste;


// Spices, herbs and seasonings
let thyme;
let bayLeaves;
let curry;
let salt;
let seasoning;
let garlic;
let ginger;


// Rice
let riceGrams;
let riceCup;

// liquid
let stockLitre;
let stockCup;
let waterLitre;
let waterCup;

// fats and oils
let vegetableOilLitre;
let vegetableOilCups;
let butterGram;
let butterSpoon;

// Time
let prepTime;
let cookTime;
let totalTime;

// Declaring the vllues

// stew base
tomatoGrams = 200;
tomatoSize = 1;
redBellPepperGrams = 50;
redBellPepperSize = 0.5;
onionGrams = 140;
onionSize = 0.5;
tomatoPaste = 7.5;


// Spices, herbs and seasonings
thyme = 0.5;
bayLeaves = 1;
curry = 1;
salt = 1;
seasoning = 1;
garlic = 1;
ginger = 1;


// Rice
riceGrams = 4;
riceCup = 0.5;

// liquid
stockLitre = 100;
stockCup = 0.4;
waterLitre = 112;
waterCup = 0.5;

// fats and oils
vegetableOilLitre = 30;
vegetableOilCups = 0.2;
butterGram = 4;
butterSpoon = 1;

// Time
prepTime = 10;
cookTime = 60;


// calculation

document.getElementById("app__servings--button").onclick = function(){
    serving = document.getElementById("app__servings--number").value;
    
    // stew base
    // tomatoes
    document.getElementById("ingredient__stewbase--tomatoes").innerHTML = "Tomatoes: " + (tomatoGrams*serving) + " grams or " + (tomatoSize*serving) + " medium sized";
    
    // pepper
    document.getElementById("ingredient__stewbase--peppers").innerHTML = "Red bell pepper: " + (redBellPepperGrams*serving) + " grams or " + ( redBellPepperSize*serving) + " medium sized";

     // onions
     document.getElementById("ingredient__stewbase--onions").innerHTML = "Onions: " + (onionGrams*serving) + " grams or " + ( onionSize*serving) + " medium sized";

      // Tomato paste
    document.getElementById("ingredient__stewbase--tomatopaste").innerHTML = "Tomato paste or puree: " + (tomatoPaste*serving) + " grams";

     // spice and seasonings

     // thyme
     document.getElementById("ingredient__spices--thyme").innerHTML = "Thyme: " + (thyme*serving) + " teaspoons ";

     // bay leaves
     document.getElementById("ingredient__spices--bayleaves").innerHTML = "Bay leaves: " + (bayLeaves*serving) + " leaves ";

     // curry
     document.getElementById("ingredient__spices--curry").innerHTML = "Curry: " + (curry*serving) + " teaspoons ";

     // salt
     document.getElementById("ingredient__spices--salt").innerHTML = "Salt: " + (salt*serving) + " teaspoons ";

     // seasoning
     document.getElementById("ingredient__spices--seasoning").innerHTML = "Seasoning: " + (seasoning*serving) + " teaspoons ";

     // garlic
     document.getElementById("ingredient__spices--garlic").innerHTML = "Garlic: " + (garlic*serving) + " cloves ";
     
     // ginger
     document.getElementById("ingredient__spices--ginger").innerHTML = "Ginger: " + (ginger*serving) + " inches ";

      // oil
      document.getElementById("ingredient__oil--vegetable").innerHTML = "Vegetable oil: " + (vegetableOilLitre*serving) + " litres or " + (vegetableOilCups*serving) + " cups";

      // butter
      document.getElementById("ingredient__oil--butter").innerHTML = "Unsalted butter: " + (butterGram*serving) + " grams or " + (butterSpoon*serving) + " tablespoon";

     // Stock
     document.getElementById("ingredient__stewbase--stock").innerHTML = "Stock: " + (stockLitre*serving) + " litres or " + ( stockCup*serving) + " cups";

     // Water
     document.getElementById("ingredient__stewbase--water").innerHTML = "Water: " + (waterLitre*serving) + " litres or " + (waterCup*serving) + " cups";

     // prep time
     document.getElementById("ingredient__time--prep").innerHTML = "Preparation time: " + (prepTime*0.5*serving) + " mins" ;
     // cook time
     document.getElementById("ingredient__time--cook").innerHTML = "Cooking time: " + (cookTime*0.5*serving) + " mins";

     // total time
     totalTime = (prepTime*0.5*serving) + (cookTime*0.5*serving)
     document.getElementById("ingredient__time--total").innerHTML = "Total time: " + totalTime + " mins";

}