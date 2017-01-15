var mobileBtn = $('.mobile-btn'),
    navMenu = $('.nav-menu');
mobileBtn.on('click', function () {
    navMenu.toggleClass('open');
    mobileBtn.toggleClass('open');
});

(function(){
    $('.sliders').slick({
        autoplay: true,
        autoplaySpeed: 3000
    });
}());
$(".slick-arrow").css('top',($(".slide").height())/2-25);


$(function(){
    $(window).resize(function() {
        $(".slick-arrow").css('top',($(".slide").height())/2-25);
    })
});

var form = $('.style-input');
var btn = $('button.btn');
var testForm = false;

form.on('change',function () {
    if($(this).val().length < 2){
    $(this).addClass('error');
    testForm = true;
    } else {
        testForm = false;
        $(this).removeClass('error');
    }

});

btn.on('click',function () {

    for(var i = 0 ; i < form.length; i++){
        if($(form[i]).val().length < 2){
            $(form[i]).addClass('error');
            testForm = true
        }
    }

   if(testForm)return false
});

