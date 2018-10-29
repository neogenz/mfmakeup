declare var $: any;

export abstract class Scrollable {
    constructor() {

    }

    protected initScrollbar(): void {
        // About Me
        if ($(".min-style").length > 0 && $(window).width() < 768) {

            $(".min-style").niceScroll({
                mousescrollstep: 60,
                cursorcolor: "#959595",
                cursorborder: "0px solid #fff",
            });
        }


        // About Us
        if ($(".med-style").length > 0) {

            $(".med-style").niceScroll({
                mousescrollstep: 60,
                cursorcolor: "#959595",
                cursorborder: "0px solid #fff",
            });
        }

        if ($(".wrapper > .inner-wrapper").length > 0) {

            $(".wrapper > .inner-wrapper").niceScroll({
                mousescrollstep: 60,
                cursorcolor: "#959595",
                cursorborder: "0px solid #fff",
            });

            if ($(".inner-wrapper .flexslider").length > 0) {

                var fs_slideshow_speed = 6000,
                    fs_animation_speed = 2000;

                $(".inner-wrapper .flexslider").flexslider({

                    prevText: "",
                    nextText: "",
                    animation: 'fade',
                    easing: "linear",
                    slideshow: true,
                    slideshowSpeed: fs_slideshow_speed,
                    animationSpeed: fs_animation_speed,
                    controlNav: false,
                    directionNav: false
                });


                // Navigation Controls - Previous
                $(".inner-wrapper .flexslider .nav .prev").click(function (event) {
                    event.preventDefault();

                    $(".inner-wrapper .flexslider").flexslider('prev');
                });

                // Navigation Controls - Next
                $(".inner-wrapper .flexslider .nav .next").click(function (event) {
                    event.preventDefault();

                    $(".inner-wrapper .flexslider").flexslider('next');
                });
            }
        }
    }
}