// @ts-ignore
const myLazyLoad = new LazyLoad({
    elements_selector: '.lazy',
    class_loading: '.processing',
    unobserve_entered: true,
    callback_loading: (el)=>{el.parentElement.classList.add('lazy-loading')},
    callback_loaded: (el)=>{el.parentElement.classList.remove('lazy-loading')},
    callback_error: (el)=>{el.parentElement.classList.remove('lazy-loading')}
});

myLazyLoad.update();