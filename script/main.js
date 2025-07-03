$(document).ready(function() {
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    if(getCookie('modalClosed') === 'true') {
        $('.modal_box').hide();
        $('body, html').removeClass('noscroll');
        $('.title').addClass('play');
    } else {
        $('body, html').addClass('noscroll');
    }

    $('.modal > button').click(function() {
        $('.modal_box').hide();
        $('body, html').removeClass('noscroll');
        $('.title').addClass('play');
        setCookie('modalClosed', 'true', 1);
    });

    function bounce () {
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
    });
})