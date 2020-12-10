const Helpers = {
    gotoTop: function () {
        let button = document.getElementById('goToTop');
        if (button){
            button.addEventListener('click', function () {
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
        }
    }
};

// @ts-ignore
$(document).ready(function () {
    // @ts-ignore
    let sticky = $('section.Header');
    // @ts-ignore
    let scroll = $(window).scrollTop();

    if (scroll >= 40) {
        sticky.addClass('fixed'); }
    else {
        sticky.removeClass('fixed');

    }
    Helpers.gotoTop();
});


// @ts-ignore
$(window).scroll(function() {
    // @ts-ignore
    let sticky = $('section.Header');
    // @ts-ignore
    let scroll = $(window).scrollTop();

    if (scroll >= 40) {
        sticky.addClass('fixed'); }
    else {
        sticky.removeClass('fixed');

    }
});