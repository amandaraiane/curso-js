const pessoa = {
    nome: "Amanda",
    idade: 24,
    email: "amanda@gmail.com"
}

console.log(pessoa)

//iterar sobre as propriedades de um objeto, com loop for in
for(let propriedade in pessoa){
    console.log(propriedade) //mostra o nome da propriedade
    console.log(pessoa[propriedade]) //para mostrar o valor da propriedade
}