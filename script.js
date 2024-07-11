/* .js files add interaction to your website */
var factList = [
  "fact1",
  "fact2",
  "fact3",
  "fact4"
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
