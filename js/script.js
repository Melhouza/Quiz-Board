$(document).ready(function(){
  $("form#options").submit(function(event){
   var question1= $("input:radio[name=question1]:checked").val();
  var question2= $("input:radio[name=question2]:checked").val();
  var question3= $("input:radio[name=question3]:checked").val();
     var question1= $("input:radio[name=question1]:checked").val();
    var question2= $("input:radio[name=question2]:checked").val();
    var question3= $("input:radio[name=question3]:checked").val();
    if(isNaN(result)=== true){
    $("#result").text("Please ensure all questions are answered");
    $(".quiz").hide();
    $(".answer").show();
  }else{
      if(isNaN(result)=== true){
        $("#result").text("Please ensure all questions are answered");
        $(".quiz").hide();
        $(".answer").show();
      }else{
     $("#result").text("Your total score is "+result+"/100");
    $(".quiz").hide();
    $(".answer").show();
  }
        $("#result").text("Your total score is "+result+"/100");
        $(".quiz").hide();
        $(".answer").show();
      }
  event.preventDefault();
 });
   });
});
