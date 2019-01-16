$(document).ready(function() {
  $("#orderform").submit(function(event) {
    var orderform = ["nameinput", "addressinput"];

    orderform.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      console.log(userInput);
      $("." + blank).text(userInput).val();
    });

    $("#output").show();

    event.preventDefault();
  });
});
