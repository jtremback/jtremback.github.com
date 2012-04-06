$(document).ready(function() {
  $(".heatmap").hide();
  $(".bucket").hide();
  $(".overlay").hide();  
  $(".detail").hide();
  $("#icon1").click(function() {
    $(".heatmap").slideDown();
  });
  $("#pointer1").click(function() {
    $(".bucket").show();
    $(".heatmap").css("margin-right","15em");
  });
  $("#card1").click(function() {
    $(".detail").show();
    $(".overlay").show();
    $(".heatmap").css("margin-right","30em");
    $(".bucket").css("margin-right","15em");
  });
  $(".overlay").click(function() {
    $(".detail").hide();
    $(".overlay").hide();
    $(".heatmap").css("margin-right","15em");
    $(".bucket").css("margin-right","0em");
  });
});
