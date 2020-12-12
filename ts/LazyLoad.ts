// @ts-ignore
const myLazyLoad = new LazyLoad({
    elements_selector: '.lazy',
    class_loading: '.processing',
    unobserve_entered: true,
    // @ts-ignore
    callback_loading: function (el){
        el.parentElement.classList.add('lazy-loading')
    },
    // @ts-ignore
    callback_loaded: function(el){
        el.parentElement.classList.remove('lazy-loading')
    },
    // @ts-ignore
    callback_error: function(el){
        el.parentElement.classList.remove('lazy-loading')
    }
});

myLazyLoad.update();