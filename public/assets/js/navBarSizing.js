(function ($) {
    $(document).ready(function ($) {
        var heightSlider = $('.navbar').height();

        $('.bg-primary').css({ marginTop: heightSlider + 'px' });
    });
})(jQuery);
