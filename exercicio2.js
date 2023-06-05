let branco = "preto";
let preto = "cinza";
let cinza = "branco";
let carro = "preto";
let valor = 30000;
let prestacao = 750;

// a) branco == “branco”
console.log(branco == "branco"); 
//Resp.: False - Porque branco tem valor 'preto' e não 'branco'.

// b) branco == cinza
console.log(branco == cinza);
//Resp.: False - Porque branco tem valor 'preto' e cinza tem valor 'branco'.

// c) carro === branco
console.log(carro === branco);
//Resp.: True - Pois ambas possuem o valor 'preto'.

// d) var cavalo = carro == “preto” ? “cinza” : “marron”;
let cavalo = carro == "preto" ? "cinza" : "marrom"
console.log(cavalo);
//Resp.: "cinza" - Pois carro tem o valor 'preto', então retorna 'cinza'.

// e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação.
let valorRestante = valor - 3000;
let qntParcelas = Math.ceil(valorRestante / prestacao);
console.log("Você precisará pagar " + qntParcelas + " parcelas até quitar o valor do carro.");
//Resp.: 36 parcelas.

// f) Somando as variáveis de cores é formada uma string de quantos caracteres?
let somaCores = branco + preto + cinza;
console.log("A soma das variveis de cores, gera uma String de " + somaCores.length + " caracteres")
//Resp.: 16 Caracteres.
