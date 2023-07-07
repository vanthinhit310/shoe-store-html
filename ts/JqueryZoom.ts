// @ts-ignore
$(document).ready(function(){
    // @ts-ignore
    $('img.image-zoom')
        .wrap('<span style="display:inline-block"></span>')
        .css('display', 'block')
        .parent()
        .zoom({
            // @ts-ignore
            url: $(this).find('img').attr('data-zoom')
        });
});