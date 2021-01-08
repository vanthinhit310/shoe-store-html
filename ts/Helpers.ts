const Helpers = {
    gotoTop: function () {
        let button = document.getElementById('goToTop');
        if (button) {
            button.addEventListener('click', function () {
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
        }
    },
    toggleMobileFilter: function () {
        try {
            // @ts-ignore
            if ($('.toggle-filter').length) {
                // @ts-ignore
                let el = $('.__open_filter');
                if (el) {
                    el.on('click', function () {
                        // @ts-ignore
                        if (! $(this).parents('.toggle-filter').hasClass('open')){
                            // @ts-ignore
                            $(this).parents('.toggle-filter').addClass('open');
                        }
                    });
                }
            }
        } catch (err) {
            console.log('Error: ' + err.message);
        }
    },
    closeMobileFilter: function () {
        try {
            // @ts-ignore
            let el = $('.__close_filter_popup');
            if (el) {
                el.on('click', function () {
                    // @ts-ignore
                    let parent = $('.toggle-filter');
                    if (parent.hasClass('open')) {
                        parent.removeClass('open');
                    }
                });
            }

        } catch (err) {
            console.log('Error: ' + err.message);
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
        sticky.addClass('fixed');
    } else {
        sticky.removeClass('fixed');

    }
    Helpers.gotoTop();
    Helpers.toggleMobileFilter();
    Helpers.closeMobileFilter();
});


// @ts-ignore
$(window).scroll(function () {
    // @ts-ignore
    let sticky = $('section.Header');
    // @ts-ignore
    let scroll = $(window).scrollTop();

    if (scroll >= 40) {
        sticky.addClass('fixed');
    } else {
        sticky.removeClass('fixed');

    }
});