const Slide = {
    bannerSlide() {
        try {
            // @ts-ignore
            if ($('.BannerSlide').length){
                // @ts-ignore
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
        } catch (err) {
            console.log('Error: ' + err.message);
        }
    }
}

// @ts-ignore
$(document).ready(function () {
    Slide.bannerSlide();   
})