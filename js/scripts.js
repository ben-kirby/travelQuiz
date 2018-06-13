var score = 0;

var scorePlus = (function(add){
  score = score + add;
})

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
    scorePlus(4);

  });

  $("#abbi").click(function(){
    $(".question1").toggle();
    $(".question2").toggle();
    scorePlus(2);
  });

//------------question 2
  $("#miso").click(function(){
    $(".question2").toggle();
    $(".question3").toggle();
    scorePlus(2);
  });

  $("#cheetah").click(function(){
    $(".question2").toggle();
    $(".question3").toggle();
    scorePlus(4);
  });

  $("#cougar").click(function(){
    $(".question2").toggle();
    $(".question3").toggle();
    scorePlus(1);
  });

  $("#ocelot").click(function(){
    $(".question2").toggle();
    $(".question3").toggle();
    scorePlus(3);
  });
//-----------question 3
  $("#submitQ3").click(function(){
    var result = parseInt($("#number1").val());
    if (result >= 1 && result <= 10) {
      if (result === 1 || result === 2) {
        $(".question3").toggle();
        $(".question4").toggle();
        scorePlus(1);
      }
      else if (result === 3 || result === 4 || result === 5) {
        $(".question3").toggle();
        $(".question4").toggle();
        scorePlus(2);
      }
      else if (result === 6 || result === 7 || result === 8) {
        $(".question3").toggle();
        $(".question4").toggle();
        scorePlus(3);
      }
      else if (result === 9 || result === 10) {
        $(".question3").toggle();
        $(".question4").toggle();
        scorePlus(4);
      }
    }
    else {
      alert("Please enter a number between 1 and 10.");
    }
  });
//---------question 4
  $("#weird").click(function(){
    $(".question4").toggle();
    $(".question5").toggle();
    scorePlus(4);
  });

  $("#fish").click(function(){
    $(".question4").toggle();
    $(".question5").toggle();
    scorePlus(3);
  });

  $("#oysters").click(function(){
    $(".question4").toggle();
    $(".question5").toggle();
    scorePlus(1);
  });

  $("#egg").click(function(){
    $(".question4").toggle();
    $(".question5").toggle();
    scorePlus(2);
  });
//---------question5
  $("#yes").click(function(){
    $(".question5").toggle();
    $("#restart").toggle();
    scorePlus(4);
    if (score >= 7 && score <= 10) {
      $(".vegas").toggle();
      }
    else if (score >= 11 && score <= 13) {
      $(".dubai").toggle();
    }
    else if (score >= 14 && score <= 17) {
      $(".patagonia").toggle();
    }
    else if (score >= 18 && score <= 20) {
      $(".northkorea").toggle();
    }
  });



  $("#no").click(function(){
    $(".question5").toggle();
    $("#restart").toggle();
    scorePlus(2);
    if (score >= 7 && score <= 10) {
      $(".vegas").toggle();
    }
    else if (score >= 11 && score <= 13) {
      $(".dubai").toggle();
    }
    else if (score >= 14 && score <= 17) {
      $(".patagonia").toggle();
    }
    else if (score >= 18 && score <= 20) {
      $(".northkorea").toggle();
    }
  });

  $("#restart").click(function(){
    $(".vegas").hide();
    $(".dubai").hide();
    $(".patagonia").hide();
    $(".northkorea").hide();
    $(".question1").show();
    $("#restart").toggle();
    score = 0;
    });
});
