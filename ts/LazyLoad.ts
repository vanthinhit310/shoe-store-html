// @ts-ignore
const myLazyLoad = new LazyLoad({
    elements_selector: '.lazy',
    class_loading: '.processing',
    callback_loading: (el)=>{el.parentElement.classList.add('lazy-loading')},
    callback_loaded: (el)=>{el.parentElement.classList.remove('lazy-loading')}
});

myLazyLoad.update();