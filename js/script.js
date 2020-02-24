$(document).ready(function() {
    $(".tet1").click(function() {
      $(".none1").toggle();
      $(".click1").toggle();
    });
  });
  $(document).ready(function() {
    $(".tet2").click(function() {
      $(".none2").toggle();
      $(".click2").toggle();
    });
  });
  $(document).ready(function() {
    $(".tet3").click(function() {
      $(".none").toggle();
      $(".click3").toggle();
    });
  });


function onclick() {
    var name = document.getElementById("name").Value;
    var email = document.getElementById("Email").Value;
    var type = document.getElementById("text").Value;
    alert("your message has been received");
}