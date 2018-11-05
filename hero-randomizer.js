$(document).ready(function(){

  var randomHeroName = "I have no name";
  var randomHeroClass = "I am not classy";
  var randomNum = -1;
  var minLength = 0;
  var maxLength = 0;
  var overwatchClasses = [1, 1, 1]; 
  var overwatchClassNames= ["Healer", "Tank", "Damage"];

  var classCheck = false;
  
  // Toggles healers
  $(".btnHealer").click(function(){
    console.log("Healers toggled");
    // ensures at least 1 enabled class
    if (overwatchClasses[1]+overwatchClasses[2] != -2){ 
      overwatchClasses[0] = overwatchClasses[0]*-1;
      //console.log(overwatchClasses[0]);
      if (overwatchClasses[0] == -1) {
        $(".btnHealer").css("background-color","red"); 
      } else {
        $(".btnHealer").css("background-color","green");
      }
    }
  });

  // Toggles tanks
  $(".btnTank").click(function(){
    console.log("Tanks toggled");
    // ensures at least 1 enabled class
    if (overwatchClasses[0]+overwatchClasses[2] != -2){
      overwatchClasses[1] = overwatchClasses[1]*-1;
      //console.log(overwatchClasses[1]);
      if (overwatchClasses[1] == -1) {
        $(".btnTank").css("background-color","red"); 
      } else {
        $(".btnTank").css("background-color","green");
      }
    }
  });

  // Toggles damages
  $(".btnDamage").click(function(){
    console.log("Damages toggled");
    // ensures at least 1 enabled class
    if (overwatchClasses[0]+overwatchClasses[1] != -2){
      overwatchClasses[2] = overwatchClasses[2]*-1;
      // console.log(overwatchClasses[2]);
      if (overwatchClasses[2] == -1) {
        $(".btnDamage").css("background-color","red"); 
      } else {
        $(".btnDamage").css("background-color","green");
      }
    }
  });

  // Clicking the randomize button starts randomize process
  $(".randomize").click(function(){
  
    //Parse heroes-list.JSON
    $.getJSON("heroes-list.json", function(heroList) {
      //Get heroList length
      maxLength = heroList.hero.length;
      console.log(maxLength);
      
      while (!classCheck) {
        //Randomizer: generate random number and converts it into an array index
        randomNum = Math.floor(Math.random() * (maxLength - minLength) + minLength); // generates random # to select a hero

        // gets heroName from hero at random num index
        randomHeroName = heroList.hero[randomNum].heroName;
        console.log(randomHeroName); // prints out the randomized hero's name
      
        // gets heroClass from hero at random num index
        randomHeroClass = heroList.hero[randomNum].heroClass;
        console.log(randomHeroClass); // prints out randomized hero's class

        // check if randomHeroClass is a valid class
        //if not, generate another hero
        for (var i = 0; i < overwatchClasses.length; i++){
          // checks toggle flag
          if (overwatchClasses[i]==1){
            // checks if that class is valid
            if (overwatchClassNames[i] == randomHeroClass) { 
              classCheck = true;
            }
          }
        }
      };

      // Print out suggested hero name      
      $(".heroName").html(randomHeroName);

      // changes class back to null so that we can reroll for the same role
      classCheck = false;
      
    }); // end randomizer change name
  });  // end button click

 



});
