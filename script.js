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

//PROGRAMA QUE RECEBE IDADE DE UMA PESSOA E EXIBA UMA MENSAGEM INDICANDO QUAL FAIXA ETARIA ELA SE ENCONTRA
document.write("<br></br>")
document.write("<br></br>")
let idade=prompt("Digite sua idade")
if(idade<=12){
    document.write("É uma criança")
}else if(idade<=18){
    document.write("É um adolescente")
}else if(idade<=60){
    document.write("É um adulto")
}else{
    document.write("É um idoso")
}
document.write("<br></br>")

//crie um programa que receba um nome de usuario e uma senha
document.write("<br></br>")
document.write("<br></br>")
let usuario=prompt("Digite o nome de usuário")
let senha=prompt("Digite sua senha")
if(usuario=="admin" && senha=="1234"){
    document.write("Usuario logado com sucesso")
}else
document.write("Login ou senha incorretos")

document.write("<br></br>")

//crie um programa que calcule a media de 7 notas e exiba reprovado ou aprovado
document.write("<br></br>")
document.write("<br></br>")
let nota1=parseFloat(prompt("Digite sua nota 1"));
let nota2=parseFloat(prompt("Digite sua nota 2"));
let nota3=parseFloat(prompt("Digite sua nota 3"));
let nota4=parseFloat(prompt("Digite sua nota 4"));
let nota5=parseFloat(prompt("Digite sua nota 5"));
let nota6=parseFloat(prompt("Digite sua nota 6"));
let nota7=parseFloat(prompt("Digite sua nota 7"));
let notas= nota1+nota2+nota3+nota4+nota5+nota6+nota7
let media=notas/7
if(media>=6){
    document.write("Voce foi aprovado")
}else
document.write("Voce foi reprovado")

document.write("<br></br>")