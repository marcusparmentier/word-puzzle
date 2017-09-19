//business (backend) logic
var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

// var selectedQuote = [$("p").text("#w1"); $("p").text("#w2");$("p").text("#w3");];
 // for (var index = 0; index <= 2; index += 1) {
 // 		selectedQuote[index].split("").remove(vowels).replace("-");
 // }

//user (frontend) logic
$(document).ready(function() {
  var selectedQuote = [$("p#w1").text(),$("p#w2").text(),$("p#w3").text()];
  console.log(selectedQuote);


  $("button").click(function() {
   $("#w1").replace(vowels);

   event.preventDefault();
  });
});
