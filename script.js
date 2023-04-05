//CRIANDO UMA VARIÁVEL INDEFINIDA
let varindefinida  
console.log(varindefinida);

//USANDO OPERADOR % EM JAVASCRIPT COM SAIDA DEMONSTRADA
let num1= 7 ;
let num2= 2 ;
let res= num1%num2 ;
console.log(res);

//CALCULANDO IMC DE UMA PESSOA
let peso =prompt("Digite seu peso")
let altura=prompt("Digite sua altura em metros")

imc = peso/(altura*altura)

document.write("Seu imc é ",imc.toFixed(1))

document.write("<br></br>")

if(imc<18.5){
    document.write("Seu IMC está abaixo do peso ideal")
}else if(imc>=18.5 && imc<24.9){
    document.write("Seu IMC está ideal")
}else if(imc>=24.9){
document.write("Seu IMC está acima do ideal")
}

document.write("<br></br>")