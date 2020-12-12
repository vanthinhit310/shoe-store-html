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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvQW5pbWUudHMiLCIuLi90cy9IZWxwZXJzLnRzIiwiLi4vdHMvTWFpbi50cyIsIi4uL3RzL01vYmlsZU1lbnUudHMiLCIuLi90cy9TbGlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEdBQUcsR0FBRztJQUNSLFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO1lBRTlCLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFakIsS0FBSyxDQUFDO2dCQUNGLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixNQUFNLEVBQUUsR0FBRztnQkFDWCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxNQUFNLEVBQUUsZUFBZTthQUMxQixDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDVixFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO1lBRTlCLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFakIsS0FBSyxDQUFDO2dCQUNGLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixNQUFNLEVBQUUsQ0FBQztnQkFDVCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxNQUFNLEVBQUUsZUFBZTthQUMxQixDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDO0NBQ0osQ0FBQztBQUdGLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDZCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUE7QUMvQkYsTUFBTSxPQUFPLEdBQUc7SUFDWixPQUFPLEVBQUU7UUFDTCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksTUFBTSxFQUFDO1lBQ1AsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Q0FDSixDQUFDO0FBR0YsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUVkLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRWpDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVuQyxJQUFJLE1BQU0sSUFBSSxFQUFFLEVBQUU7UUFDZCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQUU7U0FDMUI7UUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBRS9CO0lBQ0QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBSUgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUViLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRWpDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVuQyxJQUFJLE1BQU0sSUFBSSxFQUFFLEVBQUU7UUFDZCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQUU7U0FDMUI7UUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBRS9CO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUV4Q0gsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNkLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztJQUl2QixTQUFTLElBQUk7UUFFVCxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkQsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsU0FBUyxLQUFLO1FBRVYsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFakIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuQyxJQUFJLFVBQVUsS0FBSyxLQUFLLEVBQUU7WUFHdEIsSUFBSSxFQUFFLENBQUM7U0FDVjthQUFNO1lBR0gsS0FBSyxFQUFFLENBQUM7U0FDWDtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUNoQ0gsTUFBTSxLQUFLLEdBQUc7SUFDVixXQUFXO1FBQ1AsSUFBSTtZQUVBLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sRUFBQztnQkFFekIsSUFBSSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsK0JBQStCLEVBQUU7b0JBQzFELEtBQUssRUFBRSxJQUFJO29CQUNYLFlBQVksRUFBRSxDQUFDO29CQUNmLElBQUksRUFBRSxJQUFJO29CQUNWLE1BQU0sRUFBRSxNQUFNO29CQUNkLFFBQVEsRUFBRTt3QkFDTixLQUFLLEVBQUUsSUFBSTt3QkFDWCxvQkFBb0IsRUFBRSxLQUFLO3FCQUM5QjtvQkFDRCxVQUFVLEVBQUU7d0JBQ1IsTUFBTSxFQUFFLDBCQUEwQjt3QkFDbEMsTUFBTSxFQUFFLDBCQUEwQjtxQkFDckM7aUJBQ0osQ0FBQyxDQUFDO2FBQ047U0FDSjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUFHRCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2QsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUFBIn0=