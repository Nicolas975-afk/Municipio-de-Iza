// Inicializar carrusel interno de imágenes en los recuadros
$(document).ready(function(){
        $(".inner-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000
        });
});
// Inicializar carrusel de hoteles
$(document).ready(function(){
        $(".hotel-carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: [
                '<span style="position:absolute; left:-50px; top:50%; transform:translateY(-50%); cursor:pointer;">'+
                '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<circle cx="24" cy="24" r="22" stroke="#69b83cff" stroke-width="4" fill="#ffffffff" />'+
                '<polyline points="28,16 20,24 28,32" stroke="#69b83cff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" />'+
                '</svg></span>',
                '<span style="position:absolute; right:-50px; top:50%; transform:translateY(-50%); cursor:pointer;">'+
                '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<circle cx="24" cy="24" r="22" stroke="#69b83cff" stroke-width="4" fill="#ffffffff" />'+
                '<polyline points="20,16 28,24 20,32" stroke="#69b83cff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" />'+
                '</svg></span>'
            ],
            dots: true,
            autoplay: true,
            autoplayTimeout: 2000,
            responsive:{
                0:{items:1},
                600:{items:2},
                1000:{items:3}
            }
        });
});
(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

