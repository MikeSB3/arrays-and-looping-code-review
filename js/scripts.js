//Business Logic

//User Logic
$(document).ready(function() {

  $("#form").submit(function(event) {
    var userInput = $("input#userInput").val();
    $(".submission").append(userInput);
    event.PreventDefault();
  });

});
