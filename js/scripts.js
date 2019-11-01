//Business Logic
var userOutput = function(userInput) {
  var arrays = []

  for (var i = 0; i <= userInput; i++) {
    if (i.toString().includes("3") ) {
      arrays.push(" I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().includes("2")) {
      arrays.push(" Boop!");
    } else if (i.toString().includes("1")) {
      arrays.push(" Beep!");
    } else {
      arrays.push(" " + i);
    }
  }
  return arrays
};



//User Logic
$(document).ready(function() {

  $("form#mainForm").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#userInput").val());
    var result = userOutput(number);
    $("#entered").text(result);
    $(".submission").fadeIn(2000).show();

    $("img").click(function(){
      $("img").animate({opacity: 0}, 1000);
      $("img").animate({opacity: 1}, 1000);
    });
  });

});
