//business (backend) logic
var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
var outputArray = [];
//var consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

//user (frontend) logic
$(document).ready(function() {
  var quotes = [$("p#w1").text(),$("p#w2").text(),$("p#w3").text()];
  for (var i = 0; i < quotes.length; i++) {
    var thisSentence = quotes[i];
    var sentenceArray = thisSentence.split("");
    // var character = [!vowels];

    vowels.forEach(function(vowel) {
      sentenceArray.forEach(function(character) {

        // var letters = character[i];
        if (vowel === character) {
          //console.log("=========++++++++++++++++++=====THEY MATCH!!!=======++++++++++++++++++=======");
          // $(character).replace(function() {
          outputArray.push("-");
        }
        else (vowel != character) {
          outputArray.push(character);
        }
      })
    })

    // console.log(sentenceArray);

  }

  // $("button").click(function() {
   //*$("#w1").replace();
});

//
// console.log("----------------NEW PAIR----------------");
// console.log("THE VOWEL IS: " +vowel);
// console.log("THE CHARACTER IS: "+character);
