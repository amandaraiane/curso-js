//cada posição do array recebe um objeto
//const pessoas = [{}, {}, {}] //aqui temos o array 'pessoas' recebendo os objetos {}

const pessoas = [{
    nome: "Amanda",
    idade: 24
}, {
    nome: "Maria",
    idade: 22

}, {
    nome: "Vitória",
    idade: 8

}]

console.log(pessoas)
console.log(pessoas[0].nome) //aqui digo que quero ver a pessoa na posição 0 e somente o nome dela

for(let i = 0; i< pessoas.length; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}