//TIPO DE DADOS PRIMITIVOS ->> STRING

//não pode se declarar uma variável que inicia com número (1valor), o correto seria (valor1)
//não é permitido utilizar caracteres especiais, é valido somente (_  $)
// o valor da variável pode ser declarado tanto com "aspas duplas" como com 'aspas simples'
let variável_string = "valores de texto"

//forma de colocar aspas no meio do texto
let var_aspas = 'texto com "aspas" duplas'
let var_aspas2 = "texto com 'aspas' simples"
let var_aspas3 = "texto com \"escape\" para aspas"
console.log(var_aspas);
console.log(var_aspas2);
console.log(var_aspas3);

// maneira mais antiga de concatenar variáveis com string
let idade = 24;
let msg = "Eu tenho " + idade + " anos";
console.log(msg)

// maneira mais atual de concatenar variáveis com string, esse jeito é mais fácil de visualizar o que está acontecendo, assim como é mais difícil ocorrer erros de concatenação
let idade2 = 23;
let msg2 = `Eu tenho ${idade2} anos`;
console.log(msg2);

//para verificar o tipo de uma variável, utiliza-se o typeof. Retorno do código abaixo: string number
console.log(typeof msg2, typeof idade)

//TIPO DE DADOS PRIMITIVOS ->> NUMBER
//pode ser tanto um número interiro (10), como também pode ser um decimal (1.1)
const n1 = 10;
const n2 = 1.1;
console.log(`O tipo de n1 é ${typeof n1} e o seu valor é + ${n1}`)
console.log(`O tipo de n2 é ${typeof n2} e o seu valor é + ${n2}`)

//TIPO DE DADOS PRIMITIVOS ->> BOOLEAN
//só pode receber dois valores: true ou false (verdadeiro ou falso)
const valor = true;
console.log(`A luz está ligada? ${valor}`)

//TIPOS DE DADOS PRIMITIVOS ->> UNDEFINED 
//undefined, siginifica que uma variável foi criada, no entanto não foi atribuido nenhum valor a ela
let varTeste;
console.log(typeof varTeste);

//Quando eu quero criar uma variável e não atribuir nenhum valor a ela eu passo então "null"
let varTeste2 = null;
console.log(varTeste2);
