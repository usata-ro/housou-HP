$(document).ready(function() {
  $('.slider').bxSlider({
    auto: true,
    speed: 1000,
    pause: 4000
  });
  $("#faq dd").hide();
  $("#faq dt").click(function(){
    $("+dd", this).toggle();
    if($("span", this).text() == "+"){
      $("span", this).text("-");
    }else{
      $("span", this).text("+");
    }
  });
  $("ul.sub").hide();
  $("ul.menu li").hover(function(){
    $(this).addClass("hovering");
    $("ul:not(:animated)", this).show();
  }, function(){
    $(this).removeClass("hovering");
    $("ul", this).hide();
  })
});
