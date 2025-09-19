$(document).ready(function() {
    $('header .back').click(function() {
        window.location.href = 'index.html#projects';
    });
    
    if(sessionStorage.getItem('modalClosed') === 'true') {
        $('.modal_box').hide();
        $('body, html').removeClass('noscroll');
    }

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();
        if (scroll > 10) {
            $('header').addClass('d_h_active');
        } else {
            $('header').removeClass('d_h_active');
        }
    });

    $('.slide_wrap > .slide_box:last-child').insertBefore('.slide_wrap > .slide_box:first-child');
    $('.slide_wrap').css('margin-left', '-650px');

    function moveSlide () {
        $('.slide_wrap').animate({'margin-left':'-1300px'}, 500, function () {
            $('.slide_wrap > .slide_box:first-child').insertAfter('.slide_wrap > .slide_box:last-child');
            $('.slide_wrap').css('margin-left', '-650px');
        });
    }
    const timer = setInterval(moveSlide, 3000);
})