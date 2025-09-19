$(document).ready(function() {
    const sectionIds = ['#home', '#aboutme', '#skills', '#projects', '#contact'];
    const $navItems = $('.nav > li');

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();
        if (scroll > 10) {
            $('header').addClass('act');
            $('.top').fadeIn(100);
        } else {
            $('header').removeClass('act');
            $('.top').fadeOut(100);
        }

        let found = false;
        sectionIds.forEach(function(id, idx) {
            const $section = $(id);
            if ($section.length) {
                const offsetTop = $section.offset().top - 40;
                const offsetBottom = offsetTop + $section.outerHeight();
                if (scroll >= offsetTop && scroll < offsetBottom) {
                    $navItems.removeClass('on');
                    $navItems.eq(idx).addClass('on');
                    found = true;
                }
            }
        });

        if (!found && $(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
            $navItems.removeClass('on');
            $navItems.last().addClass('on');
        }
    });

    $('.nav > li').click(function() {
        $('.nav > li').removeClass('on');
        $(this).addClass('on');
    });

    $('.photo_slide').hide().eq(0).show();

    let current = 0;
    const total = $('.photo_slide').length;

    function fadeSlide() {
        $('.photo_slide').eq(current).fadeOut(500, function() {
            current = (current + 1) % total;
            $('.photo_slide').eq(current).fadeIn(500);
        });
    }

    const timer = setInterval(fadeSlide, 3000);
})