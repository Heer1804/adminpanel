

$(document).ready(function () {




  //aside menus
  $('.nav-link').on('click', function () {
    $('.nav-link .a').removeClass('ri-arrow-down-s-line');
    $('.nav-link .a').addClass('ri-arrow-right-s-line');
    $(this).next('.menu_dropdown').toggle(1000);
    $('.menu_dropdown').not($(this).next('.menu_dropdown')).slideUp(1000);
    $(this).children('.a').removeClass('ri-arrow-right-s-line');
    $(this).children('.a').addClass('ri-arrow-down-s-line');
  });


  //datepicker
  jQuery('#datepicker').datepicker({
    format: 'dd-mm-yyyy',
    startDate: '+1d'
  });

  // full screen js
  $('#full').on('click', function () {
    $('.ri-fullscreen-fill').toggleClass('ri-fullscreen-exit-fill');
  });


  // dropdown
  $('.founder').on('click', function () {
    $('.dropdown').toggle();
  });

  $('.b_title').on('click', function () {
    $('.b_drop').toggle();
  });

  $('.so_btn').on('click', function () {
    $('.s_drop').toggle();
  });

  $('.lang').on('click', function () {
    $('.us_drop').toggle();
  });

  $('.app').on('click', function () {
    $('.bar_dropdown').toggle();
  });

  $('#moon').on('click',function () {
    $('body').toggleClass('moon');
    $('.ri-moon-line').toggleClass('ri-sun-line');
    $('aside').toggleClass('dark');
    if($('body').hasClass('moon')){
      $('.top').css('background-color','#292e32');
      $('.main').css('background-color','#00000');
      $('.gm').css('color','#fff');
      $('.input').css('background-color','#00000');
      $('.earning,.orders,.customers,.balance,.date,.revenue,.founder,.m_head,.best,.r_head,.source,.recent,.foot,.company').css('background-color','#ced4d4');

    }
    else{
      $('.top').css('background-color','#fff');
      $('.main').css('background-color','#f3f3f9');
      $('.gm').css('color','#495057');
      $('.input').css('background-color','#f3f3f9');
      $('.earning,.orders,.customers,.balance,.date,.revenue,.founder,.m_head,.best,.r_head,.source,.recent,.foot,.company').css('background-color','#fff');
    }  
});


  // aside js 
  $('.ri-bar-chart-horizontal-line').on('click', function () {
    $(this).toggleClass('ri-arrow-right-fill');
    $('aside').toggleClass('w-70');
    $('.main').toggleClass('ml-70');
    $('.top').toggleClass('ml-70');
    $('.foot').toggleClass('l-72');
    $('.menu').toggleClass('d-none');
    $('.menu-1').toggleClass('d-block');

    var img_1 = $("img#home-btn");
    var img1_src = "assets/images/logo-light.png";
    var img2_src = "assets/images/logo-sm.png";

    if (img_1.attr("src") == img1_src) {
      img_1.attr("src", img2_src);
    }
    else {
      img_1.attr("src", img1_src);
    }
  });

});