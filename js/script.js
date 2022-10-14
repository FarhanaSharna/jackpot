const toggles=document.querySelectorAll(".faq-toggle")
toggles.forEach(toggle=>{
    toggle.addEventListener("click",()=>{
        toggle.parentNode.classList.toggle("active")
    })
})

    // Coundown js
    $('.coun_down').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('.coun_down2').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%M'));
    });
    $('.coun_down3').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%S'));
    });

    //Tounament scroll js
    $(".tournament-scroll").niceScroll({
        cursorcolor: "#1f004f",
        cursorwidth: "5px",
        cursorborder: "transparent",
        autohidemode: false,
        background: "#000",
        iframeautoresize: true,
        smoothscroll: true,
    });
    $(function () {
        'use strict';
    // sticky menu 
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 130) {
            $(".logo").addClass("sticky-menu");
        } else {
            $(".logo").removeClass("sticky-menu");
        }
    });
});
    // Flow slider js

    $('.info-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        swipeToSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });