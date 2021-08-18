

function calcularIMC(peso, altura) {
    return peso / (altura **2)
}

function classi8ficar (imc){
    if ( imc < 18.5){
        classificação =` abaixo do peso.`
    }else if ( imc < 25){
        classificação = `Com peso ideal. Parabéns`
    }else if ( imc < 30){
        classificacao = `Levemente acima do peso`
    }else if ( imc < 35 ){
        classificacao = `com obesidade grau |`
    }else if ( imc <40){
        classificacao = `com obesidade grau ||`
    }else {
        `com obesidade grau |||`
    }
}

function exibirResultado(){
    const resultado = document.getElementById("resultado")
    const nome = document.getElementById("nome").value
    const peso = parseFloat (document.getElementById("peso").value)
    const altura = parseFloat (document.getElementById("altura").value)
    

    const imc = calcularIMC (peso, altura)
    const classificacao = `com peso ideal. Parabéns`


   resultado.textContent = `${nome} seu IMC é ${imc}`

  
}

document.getElementById("calcular").addEventListener("click", exibirResultado)


