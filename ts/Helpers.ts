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
    Helpers.gotoTop();
})