$(document).ready(function(){

    
    
    $('.section-left, .nav-left')
    .fadeOut(1)
    .fadeIn(600);
    $('.section-right')
    .fadeOut(1)
    .delay(1500)
    .fadeIn(2000);
    
    $('.carousel-imagem').slick({
        autoplay: true
    });
    
    $('.slick-prev, .slick-next').hide();

    

    
    $('.testeFade')
    .fadeOut(1)
    .delay(1000)
    .toggle("blind", 500);

    $('.description-container')
    .fadeOut(1)
    .toggle("drop", 800);

    $('.nav-item').mouseenter(function(){
        $(this).css({
            'font-style': 'italic'
        },
        $(this).mouseleave(function(){
            $(this).css({
                'font-style': 'normal'
            });
        })
        )

    })
});