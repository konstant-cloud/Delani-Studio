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

  $(document).ready(function(){
    $('#form1').submit(function(event){
        var display1 = $('input#name').val();
        var display2 = $('input#email').val();
        if(display1 && display2 != ''){
            alert ('Thank you ' + display1 + ' your subscription is well received');
        }else {
            alert ('Invalid input');
        }
        event.preventDefault();
    })
});


