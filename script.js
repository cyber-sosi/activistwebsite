/* .js files add interaction to your website */

/* Generate Facts */

var factList = [
  "Global warming is causing the Earth’s average surface temperature to rise which, in turn, is causing changes in our natural climate systems. These changes are making all sorts of extreme weather events more likely and more severe, including more intense droughts, heatwaves and hurricanes but also, strangely, an increased potential for more severe cold weather events.",
  "The most abundant greenhouse gas, accounting for about two-thirds of greenhouse gases, carbon dioxide (CO2), is largely the product of burning fossil fuels.",
  "Methane, the primary component of natural gas, is responsible for more than 25 per cent of the warming we are experiencing today. It is a powerful pollutant with a global warming potential over 80 times greater than CO2 during the 20 years after it is released into the atmosphere.",
  "30% of the world’s population is exposed to deadly heat waves more than 20 days a year.",
  "Based on today’s insufficient global commitments to reduce climate polluting emissions, a rebound in greenhouse gases from a return to high-carbon societies after the pandemic may push 2030 emissions even higher – up to 60 GtCO2e.",
  "Global temperatures are now at their highest since records began. In fact, the 10 warmest years on Earth, since 1880, have occurred since 2014."
];

var fact = document.getElementById("fact");
var generate = document.getElementById("generate");

var index = 0;

/*Checks if the button is loaded in the DOM */
if (generate) {
  generate.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[index];
  index+=1;

  if (index == factList.length) {
    index = 0;
  }
  
}

/* Sign Up Message */

var input = document.getElementById("input");
var signUp = document.getElementById("signUp");
var thankYou = document.getElementById("thankYou");

if(signUp) {
  signUp.addEventListener("click", displayMsg);
}

function displayMsg() {
  thankYou.innerHTML = "Thank you for signing up!";
  
  setTimeout(function clearMsg() {thankYou.innerHTML = " "}, 2000);
  
  input.value = "";
  input.value = "";
}
