function calculaIMC(){
    //Criando as variaveis

var altura = document.getElementById('altura').value
var peso = document.getElementById('peso').value
//alert (`O peso é ${peso} e a altura é ${altura}`)
var imc = peso / (altura*altura)
if(imc < 18.5){
    alert('Abaixo do peso!')
} else if(imc >= 18.5 && imc <= 24.9){
    alert('Dentro do peso')
} else if(imc >= 25 && imc <= 29.9){
    alert ('Sobrepeso')
}else if (imc >= 30){
    alert('Obesidade')
}
}
