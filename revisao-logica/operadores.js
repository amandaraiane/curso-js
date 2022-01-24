/*Operdores Aritméticos ->> 
 Adição + | Subtração - | Multiplicação * | Divisão / | Resto da divisão % | Potência ** 
*/
let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);

/*Obs.: Resto da divisão é muito usado para saber se um número é par ou impar ou até mesmo se o número é multiplo de 3. 
Dividindo um número por 2, se o resto da divisão for 0 o número é par, caso contrário é impar. 
Dividindo um número por 3, se o resto da divisão for 0 o número é multiplo de 3. 
*/

/*Operadores de Atribuição ->>
 += | -= | *= | /= | %= | **= 
*/
let n3 = 20;
n3 = n3 + 2; // no lugar eu posso usar n3 += 2;
n3 = n3 - 2; // no lugar eu posso usar n3 -= 2;
n3 = n3 * 2; // no lugar eu posso usar n3 *= 2;
n3 = n3 / 2; // no lugar eu posso usar n3 /= 2;
n3 = n3 % 2; // no lugar eu posso usar n3 %= 2;
n3 = n3 ** 2; // no lugar eu posso usar n3 **= 2;

/*Operadores de Incremento e Decremento ->> ++ | --
É utilizado basicamente quando é preciso somar ou subtrair de 1 em 1. | i++ significa um pós incremento | ++i significa um pré incremento
pós incremento apresenta o valor da variável e só depois incrementa, pré incremento incrementa e só depois apresenta o valor da variável*/
let i = 0;
i++;
console.log(i);

/*Operadores de Comparação ->>
igualdade de valor ==
igualdade de valor e tipo ===
maior que > | maior ou igual >=
menor que < | menor ou igual <=
valores diferentes != 
valores e tipos diferentes !==
*/

let n5 = 10;
let n6 = "10";
console.log(n5 == n6); //comparação apenas de valor, retorna true
console.log(n5 === n6); //comparação de valor e tipo, retorna false
console.log(n5 > n6); //comparação de maior, retorna false
console.log(n5 >= n6); //comparação de maior ou igual, retorna true
console.log(n5 < n6); //comparação de menor, retorna false
console.log(n5 <= n6); //comparação de menor ou igual, retorna true
console.log(n5 != n6); //comparação de diferente o valor, retorna false
console.log(n5 !== n6); //comparação de diferente o valor e tipo, retorna true

/* 
Operadores Lógicos ->> 
&& (and/e) verifica se as duas expressões são verdadeiras 
|| (or/ou) verifica se ao menos uma expressão é verdadeira
! (not/não) retorna a negação da expressão 

Ex.: Para pessoa viajar para o exterior: 
    - precisa ter 18 anos ou mais
    OU
    - estar acompanhada dos pais
    E
    - ter comprado o bilhete
*/

let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >=18 || paisPresentes) && comprouBilhete
console.log(`Pode viajar: ${podeViajar}`);
