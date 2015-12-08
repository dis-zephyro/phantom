$('.showcase-more span').click(function(){
    $('.showcase-hidden').show('fast');
    $('.showcase-more').hide();
});

$('.showcase-hide span').click(function(){
    $('.showcase-hidden').hide('fast');
    $('.showcase-more').show();
});