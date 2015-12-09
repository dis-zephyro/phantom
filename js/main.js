$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:0 });
    return false;
});

$('.btn-up').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:0 });
    return false;
});


$('.showcase-more span').click(function(){
    $('.showcase-hidden').show('fast');
    $('.showcase-more').hide();
});

$('.showcase-hide span').click(function(){
    $('.showcase-hidden').hide('fast');
    $('.showcase-more').show();
});

// ----- Маска ----------

jQuery(function($){
    $("input[name='phone']").mask("+7(999) 999-9999");
});


//  Modal

$(".btn-modal").fancybox({
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
});


$(".btn-detail").fancybox({
    'max-height'	 : '50%',
    'height'	 : '50%',
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
});

// Map

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [57.9947,55.9464],
        zoom: 15,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark([57.9947,55.9464], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [47, 69],
        iconImageOffset: [-23, -70]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.geoObjects.add(myPlacemark);
}



$(document).ready(function() {

    $('.btn-submit').click(function() {

        $('body').find('form:not(this)').children('div').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).closest('form').get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).closest('form'),
                name    =     $('input[name="name"]', $form).val(),
                type    =     $('input[name="type"]', $form).val(),
                phone   =     $('input[name="phone"]', $form).val(),
                email   =     $('input[name="email"]', $form).val(),
                form    =     $('input[name="form"]', $form).val(),
                message =     $('textarea[name="message"]', $form).val();
            console.log(name, phone, email, form, type, message);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, email:email, form:form, type:type, message:message}
            }).done(function(msg) {
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                document.location.href = "http://fantom159.ru/done.html";
            });
        }
    });

});