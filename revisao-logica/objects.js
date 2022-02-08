const nomes = ["Amanda", "Maria", "Vitória"]
const idades = [24, 22, 8]
console.log(nomes[0], idades[0])

//para grupos de informações como o caso acima, o ideal é trabalhar com objetos
const pessoa = new Object()  //criando um objeto de maneira formal
console.log(pessoa)
pessoa.nome = "Luiza"
pessoa.idade = 22
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)

//criando um objeto de maneira literal, a mais utilizada
const pessoa1 = { 
    nome1: "Amanda",
    idade1: 24
}

console.log(pessoa1)
console.log(pessoa1.nome1)
console.log(pessoa1.idade1)