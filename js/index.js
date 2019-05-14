var container = $('.cards');
var mixer=mixitup(container,{
	selectors: {
        control: '[data-mixitup-control]'
    }
});

$('.buttons').on('click', function(){
    $('.buttons').removeClass('activee');
    $(this).addClass('activee');
});

$('.button-diff').on('click', function(){
});