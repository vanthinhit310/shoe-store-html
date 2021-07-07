// @ts-ignore
$(document).ready(function() {
    let menuStatus = false;
    // @ts-ignore
    // $('.slideout').hide();

    function open() {
        // @ts-ignore
        $('.first, .second, .third, .hid').addClass('animate');
        menuStatus = true;
    }

    function close() {
        // @ts-ignore
        $('.first, .second, .third, .hid').removeClass('animate');
        menuStatus = false;
    }
    // @ts-ignore
    $('.menu-btn').click(function() {
        // @ts-ignore
        $('.slideout').toggleClass('open');

        if (menuStatus === false) {
            // @ts-ignore
            // $('.menu-txt').html('Close');
            open();
        } else {
            // @ts-ignore
            // $('.menu-txt').html('Menu');
            close();
        }
    });
});