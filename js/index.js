var container = $('.cards');
var mixer=mixitup(container,{
	selectors: {
        control: '[data-mixitup-control]'
    }
});

$('.buttons').on('click', function(){
    $('.buttons').removeClass('activee');
    $('.card-item').removeClass('h-50');
    $(this).addClass('activee');
});

$('.button-diff').on('click', function(){
    $('.card-item').addClass('h-50');
});