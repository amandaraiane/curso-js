let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >=18 || paisPresentes) && comprouBilhete
console.log(`Pode viajar: ${podeViajar}`);

/*Estrutura do if else
    if (condicao){
        codigo a ser executado
    } else if (condicao 2){
              codigo a ser executado
    } else{
        codigo a ser executado
    }  
 */

if (comprouBilhete){
    console.log("Comprou bilhete")
} else{
    console.log("Não comprou bilhete")
}

let nota1 = 3;
let nota2 = 10;
let media = (nota1 + nota2) / 2;

//Utilizando a condicional if else para validar se um aluno passou ou não de ano
if (nota1 === 0 || nota2 === 0){
    console.log(`Aluno REPROVOU por falta de nota! Sua média foi de ${media}`)
} else if(media < 6){
    console.log(`Aluno ficou para RECUPERAÇÃO, com a nota ${media}`)
} else{
    console.log(`Aluno APROVADO com a média ${media}`)
}

/*Operador Ternário
    condição ? valor se for verdareiro : valor se for falso
*/
let idadeAdole = 17;
let adolescente = (idadeAdole >= 12 && idadeAdole <= 18) ? "É um adolescente" : "Não é adolescente";
console.log(adolescente)

/*
Retorno de condicionais pode ser falsy ou truth
    falsy values: 0, "", NaN, undedfined, null, false 
    truthy values: todos os demais 
*/
if("false"){
    console.log("true")
}else{
    console.log("false")
}