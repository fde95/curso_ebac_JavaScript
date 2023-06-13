// function calcularMedia (notas){ 
//     var soma = 0;
//     for (c = 0 ; c < notas.length; c++){
//         soma += notas[c];
//     }
//         media = soma/notas.length; 
//         return media;
// };
// function aprovadoReprovado (notas){
//     let media = calcularMedia (notas)
//     let condicao = media >= 7 ? "Aprovado" : "Reprovado";
//     return "Média: " + media + " Resultado: " + condicao; 
// };
    class Calculadora {
        calcularMedia(notas) {
            let soma = 0;
            for (let c = 0; c < notas.length; c++) {
            soma += notas[c];
            }
            const media = soma / notas.length;
            return media;
        }
        aprovadoReprovado(notas) {
            const media = this.calcularMedia(notas);
            const condicao = media >= 7 ? '<b style="color: green;">Aprovado</b>' : '<b style="color: red;">Reprovado</b>';
            return `Média: ${media} Resultado: ${condicao}`;
        }
        }
        const calculadora = new Calculadora();




// //formulário envio de dados - Calculo da Média
// document.getElementById('form-01').addEventListener('submit', function (event){ 
//     event.preventDefault(); 
//     event.stopPropagation();
//     let dados = new FormData(this);
//     let notas = [];
//     for (let key of dados.keys()){
//         let numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0; //garantindo que sera tipo numero
//         if (!isNaN(numero)) {
//             notas.push(numero);
//         };
//         notas.push(parseInt(dados.get(key)));
//         document.getElementById('resultado').innerHTML = aprovadoReprovado(notas);
//     }
//     console.log(notas);
// });
    document.getElementById('form-01').addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const dados = new FormData(event.target);
        const notas = [];

        for (const key of dados.keys()) {
            const numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0;
            if (!isNaN(numero)) {
            notas.push(numero);
            }
            notas.push(parseInt(dados.get(key)));
            document.getElementById('resultado').innerHTML = calculadora.aprovadoReprovado(notas);
        }
        console.log(notas);
    });



    let campoObrigatorio = document.querySelectorAll('input.obrigatorio');
    let campoNumericos = document.querySelectorAll('input.numero');

// for( let enfoco of campoObrigatorio){
//     validaCampo(enfoco);
// };
// for( let enfoco of campoNumericos){
//     validaNumero(enfoco);
// };
    campoObrigatorio.forEach((elemento) => validaCampo(elemento));
    campoNumericos.forEach((elemento) => validaNumero(elemento));




// function validaCampo(elemento){
//     elemento.addEventListener('focusout', function(event){
//         event.preventDefault();
//         if(this.value == ""){
//             document.querySelector('.mensagem').innerHTML = '<b style="color: red;">Por favor, preencha todos os campos</b>';
//             // caso eu estivesse usando CSS, deveria usar - this.style.color = "#f00"
//             this.parentNode.classList.add('erro');
//             return false;
//         } else {
//             document.querySelector('.mensagem').innerHTML = "";
//             this.parentNode.classList.remove('erro');
//         }
//     })
// };
    const validaCampo = (elemento) => {
        elemento.addEventListener('focusout', (event) => {
            event.preventDefault();
            if (elemento.value === '') {
            document.querySelector('.mensagem').innerHTML = '<b style="color: red;">Por favor, preencha todos os campos</b>';
            elemento.parentNode.classList.add('erro');
            return false;
            } else {
            document.querySelector('.mensagem').innerHTML = '';
            elemento.parentNode.classList.remove('erro');
            }
        });
    };




// function validaNumero(elemento){
//     elemento.addEventListener('focusout', function(event){
//         event.preventDefault();
//         let numero = this.value;
//         if(numero != "" && numero.match(/[0-9]*/) && numero > 0 && numero < 11){
//             document.querySelector('.mensagem2').innerHTML = "";
//             this.parentNode.classList.remove('erro');
//         } else {
//             document.querySelector('.mensagem2').innerHTML = '<b style="color: red;">Por favor, preencha apenas numeros entre 0 e 10</b>';
//             // caso eu estivesse usando CSS, deveria usar - this.style.color = "#f00"
//             this.parentNode.classList.add('erro');
//             return false;
//         }
//     })
// };
    const validaNumero = (elemento) => {
        elemento.addEventListener('focusout', (event) => {
            event.preventDefault();
            const numero = elemento.value;
            if (numero !== '' && numero.match(/[0-9]*/) && numero > 0 && numero < 11) {
            document.querySelector('.mensagem2').innerHTML = '';
            elemento.parentNode.classList.remove('erro');
            } else {
            document.querySelector('.mensagem2').innerHTML = '<b style="color: red;">Por favor, preencha apenas numeros entre 0 e 10</b>';
            elemento.parentNode.classList.add('erro');
            return false;
            }
        });
    };



