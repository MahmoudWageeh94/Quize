jQuery(document).ready(function () {
  $(".getdate").each(function() {
      $(this).datepicker();
  });
  // open side navBar
  let direction = document.getElementsByTagName("html")[0].getAttribute("dir");
  $("#openMenu").click(function () {
    if (direction === "ltr") {
      $(".side-menu").css({ left: "0px" });
    } else {
      $(".side-menu").css({ right: "0px" });
    }
  });
  // close side navBar
  $("#closeMenu").click(function () {
    if (direction === "ltr") {
      $(".side-menu").css({ left: "-300px" });
    } else {
      $(".side-menu").css({ right: "-300px" });
    }
  });
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".side-menu").length === 0) {
      if (direction === "ltr") {
        $(".side-menu").css({ left: "-300px" });
      } else {
        $(".side-menu").css({ right: "-300px" });
      }
    }
  });
  /**nice scroll */
  $(".scroll-me").niceScroll({
    railalign: document.dir === "rtl" ? "left" : "right",
    rtlmode: document.dir === "rtl",
    hwacceleration: document.dir === "rtl",
    cursoropacitymax: 0.5,
    cursorwidth: "4px",
  });
});