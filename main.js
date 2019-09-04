$(document).ready(function(){
    $(".radio").click(function(){
      $(this).addClass("checked").siblings().removeClass('checked');
    });
  });