$(document).ready(function ($) {
    var heightSlider = $('.navbar').height();
    console.log('height: ', heightSlider);

    $('.bg-primary').css({ marginTop: heightSlider + 'px' });
})(jQuery);
