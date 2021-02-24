$(window).scroll(function() {
    if ($(window).scrollTop() >= 400) {
        $("#header").addClass("common-header-fixed");
    }else {
        $("#header").removeClass("common-header-fixed");
    }
});
var $window = $(window), win_height_padded = $window.height() * 1.1;
$window.on('scroll', revealOnScroll);
function revealOnScroll() {
    var scrolled = $window.scrollTop();
    $(".revealOnScroll:not(.animated)").each(function () {
        var $this = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
                window.setTimeout(function () {
                    $this.addClass('animated ' + $this.data('animation'));
                }, parseInt($this.data('timeout'), 10));
            } else {
                $this.addClass('animated ' + $this.data('animation'));
            }
        }
    });
}
$('.second_ic').hover(function(){
    $(".customer_service").show();
},function(){
    $(".customer_service").hide();
});
$(".fourth_ic").click(function(){
    $("html,body").animate({"scrollTop" : 0}, 500);
})
var goTop = function() {
    var sTop = $(document).scrollTop();
    (sTop > 120) ? $(".fourth_ic").fadeIn(50) : $(".fourth_ic").fadeOut(50);
};
$(window).bind("scroll" , goTop);