$(function(){
  $('.cclose').click(function(){
    $('.contact').css('display', 'none');
  })

  $(window).resize(function(){
    var window_width = $(window).width();//螢幕寬度
    if(window_width < 768) {
      $('.contact').css('display', 'none');
    } else {
      $('.contact').css('display', 'block');
    }
    if((window_width >= 768) && (window_width < 1030)){
      $('.nav li a').css('padding', '0 5px 0 5px');
      $('#menu .container .collapse .navbar-nav li').css('padding', '10px 0 10px 0');
    } else if (window_width < 768){
      $('.nav li a').css('padding', '1px');
      $('#menu .container .collapse .navbar-nav li').css('padding', '0 1.5%');
    } else if(window_width >= 1030) {
      $('.nav li a').css('padding', '15px 15px');
      $('#menu .container .collapse .navbar-nav li').css('padding', '0 1.5%');
    }
  });

  $(window).trigger('resize');

  $(".clear").click(function(){
    $(".sys_cus_first_name").val('');
    $(".sys_cus_last_name").val('');
    $(".sys_cus_mail").val('');
    $(".sys_cus_phone").val('');
    $(".sys_cus_question").val('');
  })


  // $(".pitem").click(function(){
  //   $(".pitem").addClass('view');
  // })




})
