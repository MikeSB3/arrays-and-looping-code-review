//Business Logic




//User Logic
$(document).ready(function() {

  $("#mainForm").submit(function(event) {
    event.PreventDefault();
    var userInput = $("#userInput").val();
    $("#entered").append(userInput);
  });

});
