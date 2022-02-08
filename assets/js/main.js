$(document).ready(function(){
    /* Carousel */
        var swiper = new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
                loop: true,
                autoplay : true,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                dynamicBullets: true,
            },
        });
    /* End Carousel */

    /* matchHeight */
        $('.realImg section__img--item').matchHeight();
        $('.section__ttl ').matchHeight();
    /* End matchHeight */
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });     
        $('.navbar-nav li a').click(function(e) {
            $('.navbar-nav li.active').removeClass('active');

            var $parent = $(this).parent();
            $parent.addClass('active');
            e.preventDefault();
        });   
        $("a[href^='#']:not([href$='#'])").on('click', function(e) {
            e.preventDefault();
            var target = $(this).attr('href');
            var pos = 0;
            var headerHeight = Math.ceil($("header").height());
            pos = $(target).offset().top - headerHeight;
            $('html,body').stop().animate({
                'scrollTop': pos
            }, {
                'duration': 500,
                'easing': 'swing'
            });
            return false;
        });
        if ($('#backTop').length) {
            var scrollTrigger = 500, // px
                backToTop = function () {
                var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#backTop').addClass('showed');
                    } else {
                        $('#backTop').removeClass('showed');
                    }
                };
                backToTop();
                $(window).on('scroll', function () {
                    console.log(1)
                    backToTop();
                });
                // $('#backTop').on('click', function (e) {
                //     console.log(2)
                //     e.preventDefault();
                //     $('html,body').animate({
                //     scrollTop: 0
                //     }, 700);
                // });
        }       
});
$(window).scroll(function() {
    var sticky = $('header'),
    scroll = $(window).scrollTop();
});