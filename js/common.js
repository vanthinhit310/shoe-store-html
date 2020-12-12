const ANM = {
    refreshIcon: function () {
        let el = document.querySelector('.hover-effect-icon');
        el.addEventListener('mouseenter', function () {
            anime.remove(el);
            anime({
                targets: '.refresh-icon',
                rotate: 360,
                duration: 1000,
                easing: 'easeInOutSine',
            });
        }, false);
        el.addEventListener('mouseleave', function () {
            anime.remove(el);
            anime({
                targets: '.refresh-icon',
                rotate: 0,
                duration: 1000,
                easing: 'easeInOutSine',
            });
        }, false);
    }
};
$(document).ready(function () {
    ANM.refreshIcon();
});
const Helpers = {
    gotoTop: function () {
        let button = document.getElementById('goToTop');
        if (button) {
            button.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
};
$(document).ready(function () {
    let sticky = $('section.Header');
    let scroll = $(window).scrollTop();
    if (scroll >= 40) {
        sticky.addClass('fixed');
    }
    else {
        sticky.removeClass('fixed');
    }
    Helpers.gotoTop();
});
$(window).scroll(function () {
    let sticky = $('section.Header');
    let scroll = $(window).scrollTop();
    if (scroll >= 40) {
        sticky.addClass('fixed');
    }
    else {
        sticky.removeClass('fixed');
    }
});
const myLazyLoad = new LazyLoad({
    elements_selector: '.lazy',
    class_loading: '.processing',
    unobserve_entered: true,
    callback_loading: (el) => { el.parentElement.classList.add('lazy-loading'); },
    callback_loaded: (el) => { el.parentElement.classList.remove('lazy-loading'); },
    callback_error: (el) => { el.parentElement.classList.remove('lazy-loading'); }
});
myLazyLoad.update();
$(document).ready(function () {
    let menuStatus = false;
    function open() {
        $('.first, .second, .third, .hid').addClass('animate');
        menuStatus = true;
    }
    function close() {
        $('.first, .second, .third, .hid').removeClass('animate');
        menuStatus = false;
    }
    $('.menu-btn').click(function () {
        $('.slideout').toggleClass('open');
        if (menuStatus === false) {
            open();
        }
        else {
            close();
        }
    });
});
const Slide = {
    bannerSlide() {
        try {
            if ($('.BannerSlide').length) {
                let indexBanner = new Swiper('.BannerSlide .SwiperContainer', {
                    speed: 1500,
                    spaceBetween: 0,
                    loop: true,
                    effect: 'fade',
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    navigation: {
                        nextEl: '.BannerSlide .SwiperNext',
                        prevEl: '.BannerSlide .SwiperPrev',
                    },
                });
            }
        }
        catch (err) {
            console.log('Error: ' + err.message);
        }
    }
};
$(document).ready(function () {
    Slide.bannerSlide();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvQW5pbWUudHMiLCIuLi90cy9IZWxwZXJzLnRzIiwiLi4vdHMvTGF6eUxvYWQudHMiLCIuLi90cy9NYWluLnRzIiwiLi4vdHMvTW9iaWxlTWVudS50cyIsIi4uL3RzL1NsaWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sR0FBRyxHQUFHO0lBQ1IsV0FBVyxFQUFFO1FBQ1QsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7WUFFOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVqQixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRSxlQUFlO2FBQzFCLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNWLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7WUFFOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVqQixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLE1BQU0sRUFBRSxDQUFDO2dCQUNULFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRSxlQUFlO2FBQzFCLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNkLENBQUM7Q0FDSixDQUFDO0FBR0YsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNkLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQTtBQy9CRixNQUFNLE9BQU8sR0FBRztJQUNaLE9BQU8sRUFBRTtRQUNMLElBQUksTUFBTSxH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