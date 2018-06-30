
var threshold = 200;
var meals = ["🍺", "znalosti, omg", "🥃 ", "🍷 ", "znalosti, omg", "🍸 ", "🍾 ", "🥂"];
var currentMeal = null;
var currentMealPos = 0;
var saturated = 100;


function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 100);
}

function draw() { 
  if (currentMeal == null) {
    currentMeal = meals[Math.floor(Math.random()*meals.length)];
    currentMealPos = 0;
  } else {
    if (currentMealPos > 300) {
      currentMeal = meals[Math.floor(Math.random()*meals.length)];
      currentMealPos = 0;
      saturated = saturated + 10;
    } else {
      currentMealPos = currentMealPos + 5;}
  }

  fill(random(0, 100), 100, 100);
  textSize(30);
  textStyle(BOLD);

  push();
  translate(random(-100, 800), random(0, 400));
  rotate(random(0, 10));
  text(currentMeal, 0, 0);
  pop();

 
  
}
