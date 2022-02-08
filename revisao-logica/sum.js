function sum(n1, n2){
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        throw Error("sum aceita apenas números")
    }
    return n1 + n2
}

try{
    let soma = sum(3, "a")
}catch(e){
    console.log("Ocorreu um erro")
    console.log(e.message) //o '.message serve para retornar apenas a mensagem, podendo ou não ser utilizada'
}