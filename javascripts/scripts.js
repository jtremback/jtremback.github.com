$(document).ready(function() {
  $(".heatmap").hide();
  $(".bucket").hide();
  $(".overlay").hide();  
  $(".input-menu").hide();
  $(".annotate-input").hide();
  $(".detail").hide();
  $("#icon1").click(function() {
    $(".heatmap").slideDown();
  });
  $("#pointer1").click(function() {
    $(".bucket").show();
    $(".heatmap").css("margin-right","300px");
  });
  $("#card1").click(function() {
    $(".detail").show();
    $(".overlay").show();
    $(".heatmap").css("margin-right","450px");
    $(".bucket").css("margin-right","150px");
  });
  $(".overlay").click(function() {
    $(".detail").hide();
    $(".overlay").hide();
    $(".heatmap").css("margin-right","15em");
    $(".bucket").css("margin-right","0em");
  });
  $(".input").hover(function() {
    $(".input-menu").slideDown();
  });
  $(".annotate").click(function() {
    $(".annotate-input").slideDown();
  });
});
