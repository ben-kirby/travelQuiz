var dubai = 0;
var vegas = 0;
var patagonia = 0;
var northkorea = 0;

//---------------------------------

$(document).ready(function(){
  $("#begin").click(function(){
    $(".intro").toggle();
    $(".question1").toggle();
  });
//---------question 1
  $("#ilana").click(function(){
    $(".question1").toggle();
    $(".question2").toggle();
    patagonia = patagonia + 1;
    northkorea = northkorea + 1;
  });

  $("#abbi").click(function(){
    $(".question1").toggle();
    $(".question2").toggle();
    dubai = dubai + 1;
    vegas = vegas + 1;
  });

//------------question 2
  $("#miso").click(function(){
    $(".question2").toggle();
    $(".question3").toggle();
    dubai = dubai + 1;
    patagonia = patagonia + 1;
  });

  $("#cheetah").click(function(){
    $(".question2").toggle();
    $(".question3").toggle();
    patagonia = patagonia + 1;
    northkorea = northkorea + 1;
  });

  $("#cougar").click(function(){
    $(".question2").toggle();
    $(".question3").toggle();
    dubai = dubai + 1;
    vegas = vegas + 1;
  });

  $("#ocelot").click(function(){
    $(".question2").toggle();
    $(".question3").toggle();
    northkorea = northkorea + 1;
    vegas = vegas


     + 1;
  });
//-----------question 3
  $("#number").click(function(){
    var result = parseInt($("#number1").val());
    if (result >= 1 && result <= 10) {
      if (result = 1 || result = 2) {
        $(".question3").toggle();
        $(".question4").toggle();
        vegas = vegas + 1;
      }
      else if (result = 3 || result = 4 || result = 5) {
        $(".question3").toggle();
        $(".question4").toggle();
        dubai = dubai + 1;
      }
      else if (result = 6 || result = 7 || result = 8) {
        $(".question3").toggle();
        $(".question4").toggle();
        patagonia = patagonia + 1;
      }
      else if (result = 9 || result = 10) {
        $(".question3").toggle();
        $(".question4").toggle();
        northkorea = northkorea + 1;
      }
    }
    else {
      alert("Please enter a number between 1 and 10.");
    }
  });
//---------question 4

});
