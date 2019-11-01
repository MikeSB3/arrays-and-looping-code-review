//Business Logic
var userOutput = function(userInput) {
  return("1");
}

//User Logic
$(document).ready(function() {
  $("form#mainForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#userInput").val());
    var result = userOutput(number);
    $("#entered").append(result);
  });

});
