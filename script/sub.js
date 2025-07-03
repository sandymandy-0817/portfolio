$(document).ready(function() {
    $('header .back').click(function() {
        history.back();
    });
    
    if(sessionStorage.getItem('modalClosed') === 'true') {
        $('.modal_box').hide();
        $('body, html').removeClass('noscroll');
    }

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