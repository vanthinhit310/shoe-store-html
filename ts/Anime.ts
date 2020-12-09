const ANM = {
    refreshIcon: function () {
        let el = document.querySelector('.hover-effect-icon');
        el.addEventListener('mouseenter', function () {
            // @ts-ignore
            anime.remove(el);
            // @ts-ignore
            anime({
                targets: '.refresh-icon',
                rotate: 360,
                duration: 1000,
                easing: 'easeInOutSine',
            });
        }, false);
        el.addEventListener('mouseleave', function () {
            // @ts-ignore
            anime.remove(el);
            // @ts-ignore
            anime({
                targets: '.refresh-icon',
                rotate: 0,
                duration: 1000,
                easing: 'easeInOutSine',
            });
        }, false);
    }
};

// @ts-ignore
$(document).ready(function () {
    ANM.refreshIcon();
})