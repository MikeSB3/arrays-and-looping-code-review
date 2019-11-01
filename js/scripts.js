//Business Logic

//User Logic
$(document).ready(function() {

  $("#form").submit(function(event) {
    event.PreventDefault();
    var userInput = $("input#userInput").val();
    $(".submission").append(userInput);
  });

});
