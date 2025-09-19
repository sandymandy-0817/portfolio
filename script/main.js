$(document).ready(function() {
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    }

    function typeText($el, text, speed = 50) {
        $el.text('');
        return new Promise(resolve => {
            let i = 0;
            function typing() {
                if (i <= text.length) {
                    $el.text(text.slice(0, i));
                    i++;
                    setTimeout(typing, speed);
                } else {
                    resolve();
                }
            }
            typing();
        });
    }

    $('.modal .button .cd1').click(async function() {
        $('.modal_box').stop(true, true).fadeOut(200);
        $('body, html').removeClass('noscroll');
        $('.title').addClass('play');
        setCookie('modalClosed', 'true', 1);

        const $title = $('.title');
        const $job = $title.find('.job');
        const $h2 = $title.find('h2');
        const $name = $title.find('.name');

        const jobText = $job.data('text') || $job.text();
        const h2Text = $h2.data('text') || $h2.text();
        const nameText = $name.data('text') || $name.text();

        $job.data('text', jobText);
        $h2.data('text', h2Text);
        $name.data('text', nameText);

        $job.text('');
        $h2.text('');
        $name.text('');

        await typeText($job, jobText, 50);
        await typeText($h2, h2Text, 50);
        await typeText($name, nameText, 50);
    });

    if (getCookie('modalClosed') === 'true') {
        $('.modal_box').hide();
        $('body, html').removeClass('noscroll');
        $('.title').addClass('play');
    } else {
        $('body, html').addClass('noscroll');
    }

    $('.close').click(async function() {
        $('.modal_box').fadeOut(200);
        $('body, html').removeClass('noscroll');
        $('.title').addClass('play');

        const $title = $('.title');
        const $job = $title.find('.job');
        const $h2 = $title.find('h2');
        const $name = $title.find('.name');

        const jobText = $job.data('text') || $job.text();
        const h2Text = $h2.data('text') || $h2.text();
        const nameText = $name.data('text') || $name.text();

        $job.data('text', jobText);
        $h2.data('text', h2Text);
        $name.data('text', nameText);

        $job.text('');
        $h2.text('');
        $name.text('');

        await typeText($job, jobText, 50);
        await typeText($h2, h2Text, 50);
        await typeText($name, nameText, 50);
    });

    function bounce() {
        $('.scroll').addClass('bounce');
        setTimeout(function() {
            $('.scroll').removeClass('bounce');
        }, 600);
    }

    setInterval(bounce, 1800);

    $('.p_list').mouseenter(function() {
        let index = $(this).index();
        $('.explain_text').removeClass('show');
        $('.explain_text').eq(index).addClass('show');
        $('.detail').eq(index).stop(true, true).fadeIn(200);
    });

    $('.p_list').mouseleave(function() {
        $('.detail').stop(true, true).fadeOut(200);
    })

    $(window).on('scroll', function() {
        // #aboutme 영역
        var $aboutme = $('#aboutme');
        var $h3 = $aboutme.find('h3');
        var $photo = $aboutme.find('.photo');
        var $s_title = $aboutme.find('.s_title');
        var $motto = $aboutme.find('.motto');
        var $info = $aboutme.find('.info');
        var aboutmeTop = $aboutme.offset().top;
        var aboutmeHeight = $aboutme.outerHeight();
        var winScroll = $(window).scrollTop();
        var winHeight = $(window).height();

        if (winScroll + winHeight > aboutmeTop + 100 && winScroll < aboutmeTop + aboutmeHeight - 100) {
            $h3.addClass('active');
            $photo.addClass('active');
            $s_title.addClass('active');
            $motto.addClass('active');
            $info.addClass('active');
        } else {
            $h3.removeClass('active');
            $photo.removeClass('active');
            $s_title.removeClass('active');
            $motto.removeClass('active');
            $info.removeClass('active');
        }

        // #skills 영역
        var $skills = $('#skills');
        var $h3s = $skills.find('h3');
        var $high = $skills.find('.high');
        var $middle = $skills.find('.middle');
        var $low = $skills.find('.low');
        var skillsTop = $skills.offset().top;
        var skillsHeight = $skills.outerHeight();

        if (winScroll + winHeight > skillsTop + 100 && winScroll < skillsTop + skillsHeight - 100) {
            $h3s.addClass('active');
            $high.addClass('active');
            $middle.addClass('active');
            $low.addClass('active');
        } else {
            $h3s.removeClass('active');
            $high.removeClass('active');
            $middle.removeClass('active');
            $low.removeClass('active');
        }

        // #projects 영역
        var $projects = $('#projects');
        var $h3p = $projects.find('h3');
        var $h4 = $projects.find('h4');
        var $pLists = $projects.find('.p_list');
        var $how = $projects.find('.explain .how');
        var $mention = $projects.find('.explain .mention_e');
        var $shortExplain = $projects.find('.explain .short_explain');
        var projectsTop = $projects.offset().top;
        var projectsHeight = $projects.outerHeight();

        if (winScroll + winHeight > projectsTop + 100 && winScroll < projectsTop + projectsHeight - 100) {
            if (!$h3p.hasClass('active')) {
                $h3p.addClass('active');
                setTimeout(function() { $h4.addClass('active'); }, 200);
                $pLists.each(function(idx, el) {
                    setTimeout(function() {
                        $(el).addClass('active');
                        if (idx === 0) {
                            $how.addClass('active');
                            setTimeout(function() { $mention.addClass('active'); }, 200);
                            setTimeout(function() { $shortExplain.addClass('active'); }, 400);
                        }
                    }, 200 * (idx + 2));
                });
            }
        } else {
            $h3p.removeClass('active');
            $h4.removeClass('active');
            $pLists.removeClass('active');
            $how.removeClass('active');
            $mention.removeClass('active');
            $shortExplain.removeClass('active');
        }

        // #contact
        var $contact = $('#contact');
        var $h3_c = $contact.find('h3');
        var $cont_img = $contact.find('.contact_box img');
        var $contact_box_1 = $contact.find('.contact_box li:first-child');
        var $contact_box_2 = $contact.find('.contact_box li:nth-child(2)');
        var $contact_box_3 = $contact.find('.contact_box li:last-child');
        var $review = $contact.find('.review img');
        var $text = $contact.find('.text');
        var contactTop = $contact.offset().top;
        var contactHeight = $contact.outerHeight();

        if (winScroll + winHeight > contactTop + 100 && winScroll < contactTop + contactHeight - 100) {
            $h3_c.addClass('active');
            $cont_img.addClass('active');
            $contact_box_1.addClass('active');
            $contact_box_2.addClass('active');
            $contact_box_3.addClass('active');
            $review.addClass('active');
            $text.addClass('active');
        } else {
            $h3_c.removeClass('active');
            $cont_img.removeClass('active');
            $contact_box_1.removeClass('active');
            $contact_box_2.removeClass('active');
            $contact_box_3.removeClass('active');
            $review.removeClass('active');
            $text.removeClass('active');
        }
    });
});