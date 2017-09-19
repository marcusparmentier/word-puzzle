//business (backend) logic
var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

//user (frontend) logic
$(document).ready(function() {
  var quotes = [$("p#w1").text(),$("p#w2").text(),$("p#w3").text()];
  for (var i = 0; i < quotes.length; i++) {
    var thisSentence = quotes[i];
    var sentenceArray = thisSentence.split("");
    //["a", "b", "c", " ", "d"];
    vowels.forEach(function(vowel) {
      sentenceArray.forEach(function(character) {
        console.log("----------------NEW PAIR----------------");
        console.log("THE VOWEL IS: " +vowel);
        console.log("THE CHARACTER IS: "+character);
        if (vowel === character) {
          console.log("=========++++++++++++++++++=====THEY MATCH!!!=======++++++++++++++++++=======");
        }
      })
    })
    // console.log(sentenceArray);

  }

  // $("button").click(function() {
   //*$("#w1").replace();
});
