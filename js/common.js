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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvQW5pbWUudHMiLCIuLi90cy9NYWluLnRzIiwiLi4vdHMvU2xpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxHQUFHLEdBQUc7SUFDUixXQUFXLEVBQUU7UUFDVCxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEQsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRTtZQUU5QixLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWpCLEtBQUssQ0FBQztnQkFDRixPQUFPLEVBQUUsZUFBZTtnQkFDeEIsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsTUFBTSxFQUFFLGVBQWU7YUFDMUIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ1YsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRTtZQUU5QixLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWpCLEtBQUssQ0FBQztnQkFDRixPQUFPLEVBQUUsZUFBZTtnQkFDeEIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsTUFBTSxFQUFFLGVBQWU7YUFDMUIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQztDQUNKLENBQUM7QUFHRixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2QsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFBO0FFL0JGLE1BQU0sS0FBSyxHQUFHO0lBQ1YsV0FBVztRQUNQLElBQUk7WUFFQSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLEVBQUM7Z0JBRXpCLElBQUksV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLCtCQUErQixFQUFFO29CQUMxRCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxZQUFZLEVBQUUsQ0FBQztvQkFDZixJQUFJLEVBQUUsSUFBSTtvQkFDVixRQUFRLEVBQUU7d0JBQ04sS0FBSyxFQUFFLElBQUk7d0JBQ1gsb0JBQW9CLEVBQUUsS0FBSztxQkFDOUI7b0JBQ0QsVUFBVSxFQUFFO3dCQUNSLE1BQU0sRUFBRSwwQkFBMEI7d0JBQ2xDLE1BQU0sRUFBRSwwQkFBMEI7cUJBQ3JDO2lCQUNKLENBQUMsQ0FBQzthQUNOO1NBQ0o7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7Q0FDSixDQUFBO0FBR0QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNkLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQSJ9