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
const Slide = {
    bannerSlide() {
        try {
            if ($('.BannerSlide').length) {
                let indexBanner = new Swiper('.BannerSlide .SwiperContainer', {
                    speed: 1500,
                    spaceBetween: 0,
                    loop: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvQW5pbWUudHMiLCIuLi90cy9IZWxwZXJzLnRzIiwiLi4vdHMvTWFpbi50cyIsIi4uL3RzL1NsaWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sR0FBRyxHQUFHO0lBQ1IsV0FBVyxFQUFFO1FBQ1QsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7WUFFOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVqQixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRSxlQUFlO2FBQzFCLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNWLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7WUFFOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVqQixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLE1BQU0sRUFBRSxDQUFDO2dCQUNULFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRSxlQUFlO2FBQzFCLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNkLENBQUM7Q0FDSixDQUFDO0FBR0YsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNkLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQTtBQy9CRixNQUFNLE9BQU8sR0FBRztJQUNaLE9BQU8sRUFBRTtRQUNMLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsSUFBSSxNQUFNLEVBQUM7WUFDUCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztDQUNKLENBQUM7QUFHRixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBRWQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFakMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRW5DLElBQUksTUFBTSxJQUFJLEVBQUUsRUFBRTtRQUNkLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7S0FBRTtTQUMxQjtRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7S0FFL0I7SUFDRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFJSCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRWIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFakMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRW5DLElBQUksTUFBTSxJQUFJLEVBQUUsRUFBRTtRQUNkLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7S0FBRTtTQUMxQjtRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7S0FFL0I7QUFDTCxDQUFDLENBQUMsQ0FBQztBRXpDSCxNQUFNLEtBQUssR0FBRztJQUNWLFdBQVc7UUFDUCxJQUFJO1lBRUEsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxFQUFDO2dCQUV6QixJQUFJLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQywrQkFBK0IsRUFBRTtvQkFDMUQsS0FBSyxFQUFFLElBQUk7b0JBQ1gsWUFBWSxFQUFFLENBQUM7b0JBQ2YsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFO3dCQUNOLEtBQUssRUFBRSxJQUFJO3dCQUNYLG9CQUFvQixFQUFFLEtBQUs7cUJBQzlCO29CQUNELFVBQVUsRUFBRTt3QkFDUixNQUFNLEVBQUUsMEJBQTBCO3dCQUNsQyxNQUFNLEVBQUUsMEJBQTBCO3FCQUNyQztpQkFDSixDQUFDLENBQUM7YUFDTjtTQUNKO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQUdELENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDZCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDeEIsQ0FBQyxDQUFDLENBQUEifQ==