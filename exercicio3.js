document.getElementById('form1').addEventListener('submit', function (event){ 

    event.preventDefault(); 
    event.stopPropagation();

    const formClass = this.getAttribute('class');

    if (formClass && formClass.match(/erro/)) {
        return false;
    }

    let dados = new FormData(this);

    let cadastros = [];

    for (let key of dados.keys()){
        cadastros.push((dados.get(key)));
        console.log(cadastros);
    };

    this.reset();
});



let campoObrigatorio = document.querySelectorAll('input.obrigatorio');
let campoNumericos = document.querySelectorAll('input.numero');
let campoEmail = document.querySelectorAll('input.email');
let campoUf = document.querySelectorAll('input.uf');


for( let enfoco of campoObrigatorio){
    validaCampo(enfoco);
};

for( let enfoco of campoNumericos){
    validaNumero(enfoco);
};

for( let enfoco of campoEmail){
    validaEmail(enfoco);
};

for( let enfoco of campoUf){
    validaUF(enfoco);
};


function validaCampo(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
    
        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = '<b style="color: red;">Por favor, preencha todos os campos.</b>';
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.parentNode.classList.remove('erro');
        }
    })
};

function validaNumero(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        let numero = this.value.match(/^[\d]{5}-[\d]{3}/) ? this.value.replace(/-/, "") : this.value;
    
        if(numero != "" && numero.match(/[\d]/)){
            document.querySelector('.mensagem2').innerHTML = "";
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem2').innerHTML = '<b style="color: red;">Insira apenas numeros nos campos "Telefone" e "Nº!"</b>';
            this.parentNode.classList.add('erro');
            return false;
        }
    })
}

function validaEmail(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        if(this.value.match(/@/) && this.value.match(/\./)){
            document.querySelector('.mensagem3').innerHTML = "";
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem3').innerHTML = '<b style="color: red;">Insira um e-mail válido</b>';
            this.parentNode.classList.add('erro');
            return false;
        }

    })
}
function validaUF(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        if(this.value.match(/^[a-zA-Z]{2}$/)){
            document.querySelector('.mensagem3').innerHTML = "";
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem3').innerHTML = '<b style="color: red;">Preencha apenas com duas letars</b>';
            this.parentNode.classList.add('erro');
            return false;
        }
    })
}