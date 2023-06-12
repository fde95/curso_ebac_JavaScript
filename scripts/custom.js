$(document).ready(function() {

// Carrossel
    $(".owl-carousel").owlCarousel({
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });

// Manipulação do CSS
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

// Manipulação do DOM
    $('.item:first h4').append('<span class="badge bg-danger ms-3 mt-2">Novo</span>');
    $('.item h4').addClass('mt-3');
    $('.item:first h4').removeClass('mt-3');
    $('.item:first h4').addClass('mt-2');
    $('.item h4').after('Texto Simples');
    $('.item').addClass('ms-3');

// jQueryUI
    $('.caption')    
    .hide(1)
    .delay(1000)
    .show('blind', 1500)
    .effect("highlight", 2000);
    $('.item:first, .btn-dark').mouseenter(function(){
        $('span').effect("pulsate", 'easeOutBounce', 2000)
    });

    $('.about').click(function(){
        $('.aboutUs__Header')
        .hide(1)
        .delay(200)
        .show('drop', 1000)
    })


// Formulário
    $('#cel').mask('(00)00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#date').mask('00/00/0000');
    $('body').on('focus', '#date', function(){
        $(this).datepicker()
    });

    $('.form-contact').validate({
        rules: {
            nome:{
                required: true
            },
            cel:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            cpf:{
                required: true
            }
        },
        messages:{
            name: 'Por favor, insira o seu nome completo',
            email: 'Digite seu e-mail',
            cel: 'Insira número de celular para contato',
            cpf: 'Digite seu CPF',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert (`Existem ${camposIncorretos} campos obrigatórios não preenchidos`)
            }
        }
    });


// Newsletter
    $('#newsSubmit').on('click', function(e){
        e.preventDefault();

        if ($('#emailNews').val() != '' || $('#emailNews').val() === false){
            $('.required').hide()
            $('#inputEmail').toggle("fade", 1000);
            $('#submitButton').removeClass('col-md-5');
            $('#submitButton').addClass('col');
            $('#newsSubmit').removeClass('btn-primary')
            $('#submitButton').addClass('btn btn-success');
            $('#submitButton').text('Enviado com sucesso');
        } else{
            $('.required').addClass('error')
            $('.required').text('Preencha um e-mail válido')
        }
    })
});