$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });

    $('.item').mouseenter(function(){
        $(this).css({
            'scale' : '.95' ,
            'transition' : '1s'
        });
    });
    $('.item').mouseleave(function(){
        $(this).css({
            'scale' : '1' ,
            'transition' : '1s'
        });
    });
    $('.item:first h4').append('<span class="badge bg-danger ms-3 mt-2">Novo</span>');
    $('.item h4').addClass('mt-3');
    $('.item:first h4').removeClass('mt-3');
    $('.item:first h4').addClass('mt-2');
    $('.item h4').after('Texto Simples');
    $('.item').addClass('ms-3');

    $('button[type="submit"]').click(function() {
        let pesquisa = $('input[type="search"]').val();
        console.log("Termo de busca: " + pesquisa);
        $('input[type="search"]').val('');
        return false;
    });
});