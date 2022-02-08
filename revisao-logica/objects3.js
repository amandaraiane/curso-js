//método é uma função atrelada a propriedade de um objeto

const produto = {
    nome: "caneca",
    qtd: 10,
    comprar: function(n){ //nas versões mais novas não é preciso adicionar o function, basta então passar: comprar(n)
        console.log(this)
        if(n > this.qtd){
            return "quantidade não disponível"
        }
        this.qtd -= n
    }
}
produto.comprar(3)
console.log(produto)
