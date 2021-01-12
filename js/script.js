$(document).ready(function(){

  $('.padre').hover(function(){
    //più dropdown
    $(this).children('div').toggleClass('active');
  });
});
