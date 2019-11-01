//Business Logic
var userOutput = function(userInput) {
  if (userInput === 3) {
    return ("I'm sorry, Dave. I'm afraid I can't do that.");
  } else if (userInput === 2) {
    return ("Boop!");
  } else if (userInput === 1) {
    return ("Beep!");
  } else {
    return (userInput);
  }

};

//User Logic
$(document).ready(function() {
  $("form#mainForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#userInput").val());
    var result = userOutput(number);
    $("#entered").append(result);
  });

});
