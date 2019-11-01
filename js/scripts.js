//Business Logic
var userOutput = function(userInput) {
  var arrays = []
  var threes = []

  for (var i = 0; i < userInput; i++) {
    arrays.push(userInput);
  };
  console.log(arrays[0]);

  arrays.forEach(function(userInput) {
    if (arrays.includes(3)) {
      threes.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
  });
  console.log(threes[0]);

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
