// js for slider menu
$(".fa-bars").click(function () {
    $("aside").toggleClass("ms-60");
    $("header").toggleClass("ml-60");
    $(".body-panel").toggleClass("ml-60");
    $(".fa-bars").toggleClass(".fa-bars fa-arrow-right");
    $(".img1").toggleClass("d_none");
     $(".img2").toggleClass("d_block");
    var image_1 = $("#home-btn");
    var img1_src = "assets/images/logo-light.png";
    var img2_src = "assets/images/logo-sm.png";
    if (image_1.attr("src") == img1_src) {
      image_1.attr("src", img2_src);
    } else {
      image_1.attr("src", img1_src);
    }
  });
  // js for aside inner menu
  $(".accordion").click(function () {
    $(this).find("ul").slideToggle();
    $(this)
      .find("i.arrow")
      .toggleClass("ri-arrow-down-s-line ri-arrow-right-s-line ");
  });