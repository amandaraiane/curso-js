//Conversão implicita, o interpretador entende que multiplicação precisa ser entre números e retorna o resultado correto da conta (20),
//no entanto no final as variáveis continuam do mesmo tipo (number e string)
// A conversão implicita funciona também na divisão e subtração, no entanto ao se tratar da adição, o resultado é uma concatenação
let n1 = 10;
let n2 = "2";
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 - n2);
console.log(n1 + n2);
console.log(typeof n1, typeof n2);

//Obs.: Toda informação inserida pelo usuário vem com o tipo 'string', por isso é importante fazer a conversão para números quando necessário
// Três maneiras principais de converter string para número: parseFloat, parseInt, Number()

//Conversão explicita com parseInt, números inteiros. Só consegue converter se os valores começarem com número (10asd = 10) (asd10 = NaN, ou seja não é número)
let n3 = 10;
let n4 = "2";

n4 = parseInt(n4);
console.log(n3 + n4, typeof n3, typeof n4);

//Conversão explicita com parseFloat, números decimais. Só consegue converter se os valores começarem com número (10asd = 10) (asd10 = NaN, ou seja não é número)
let n5 = 10;
let n6 = "2.45";

n6 = parseFloat(n6);
console.log(n5 + n6, typeof n5, typeof n6);

//O Método Construtor Number não consegue converter se tiver caracteres diferentes de números (10asd = NaN) (asd10 = NaN)
let n7 = "10asd";
let n8 = 2;

n7 = Number(n7);
console.log(n7 + n8, typeof n7, typeof n8);


//Converter números em strings com método toString(), dentro do parenteses pode ser passado parametros referente a base do número. 
//Por padrão quando não passamos nenhum parametro é usado a base decimal = 10
//base decimal = 10 (numeros de 0 - 9) 
//base hexadecimal = 16 (numeros de 0 - f), onde f vale 15
//base binária = 2 (numeros 0 1) 

//base decimal toString()
let valor1 = 10;
valor1 = valor1.toString(10); //aqui poderia ter passado apenas toString()
console.log(valor1, typeof valor1);

//base hexadecimal toString(16)
let valor2 = 10;
valor2 = valor2.toString(16);
console.log(valor2, typeof valor2);

//base binaria toString(2)
let valor3 = 10;
valor3 = valor3.toString(2);
console.log(valor3, typeof valor3);