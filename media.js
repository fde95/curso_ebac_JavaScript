function calcularMedia() {
    
    var primeiraNota = parseInt(document.getElementById ('valor1').value);
    var segundaNota = parseInt(document.getElementById ('valor2').value);
    var terceiraNota = parseInt(document.getElementById ('valor3').value);
    
    var media = (primeiraNota + segundaNota + terceiraNota) / 3;

    document.getElementById('resultado').innerHTML = Math.round(media);
}