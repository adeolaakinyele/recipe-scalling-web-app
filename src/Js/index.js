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

//recipe
let jollofrecipe;

// Declaring the values

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

// recipe
let preparation = ` Preparation:

Rinse the rice thoroughly and set it aside to drain.
In a blender, combine the diced tomatoes, tomato paste, red bell pepper, and green bell pepper. Blend until you have a smooth mixture.`;

let sauteVegetables = ` Sauté Vegetables:

Heat the vegetable oil in a large pot over medium heat.
Add the chopped onions and sauté until they become translucent.
Stir in the minced garlic and ginger, and cook for another minute.`;

let tomatoBlend = `Add Tomato Blend:

Pour in the blended tomato and pepper mixture. Stir well.
Add the thyme, curry powder, paprika, cayenne pepper, and bay leaves. Cook the sauce, stirring occasionally, until it thickens and the oil starts to separate from the tomato mixture (about 10-15 minutes).`;

let cookRice = `Cook the Rice:

Add the drained rice to the tomato sauce. Stir to coat the rice evenly with the sauce.
Pour in the chicken or vegetable broth, and season with salt and pepper to taste.
If you're using green peas, add them at this stage.
Bring the mixture to a boil, then reduce the heat to low. Cover the pot with a tight-fitting lid.`;

let simmer = `Simmer:

Let the Jollof Rice simmer on low heat for about 25-30 minutes or until the rice is tender and has absorbed all the liquid. Avoid stirring the rice too much to prevent it from becoming mushy.`;

let serve = `Serve:

Once the rice is cooked, remove the bay leaves and fluff the rice with a fork.
Serve your delicious Nigerian Jollof Rice with your choice of protein (chicken, beef, fish) and enjoy!`;

let feel = `Feel free to adjust the spices and seasonings to suit your taste preferences. Nigerian Jollof Rice is often served with fried plantains and coleslaw for a complete meal.`;


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
    document.getElementById("ingredient__liquid--stock").innerHTML = "Stock: " + (stockLitre*serving) + " litres or " + ( stockCup*serving) + " cups";

    // Water
    document.getElementById("ingredient__liquid--water").innerHTML = "Water: " + (waterLitre*serving) + " litres or " + (waterCup*serving) + " cups";

    // prep time
    document.getElementById("ingredient__time--prep").innerHTML = "Preparation time: " + (prepTime*0.5*serving) + " mins" ;
     
    // cook time
     document.getElementById("ingredient__time--cook").innerHTML = "Cooking time: " + (cookTime*0.5*serving) + " mins";

    // total time
     totalTime = (prepTime*0.5*serving) + (cookTime*0.5*serving)
     document.getElementById("ingredient__time--total").innerHTML = "Total time: " + totalTime + " mins";
     
    // recipe
    // jollofrecipe = preparation + sauteVegetables + tomatoBlend + cookRice + simmer + serve + feel;
    // document.getElementById("jollof__recipe").innerHTML = jollofrecipe;
    document.getElementById("recipe__preparation").innerHTML = preparation;
    document.getElementById("recipe__sauteVegetables").innerHTML = sauteVegetables;
    document.getElementById("recipe__tomatoBlend").innerHTML = tomatoBlend;
    document.getElementById("recipe__cookRice").innerHTML = cookRice;
    document.getElementById("recipe__simmer").innerHTML = simmer;
    document.getElementById("recipe__serve").innerHTML = serve;
    document.getElementById("recipe__feel").innerHTML = feel;

}