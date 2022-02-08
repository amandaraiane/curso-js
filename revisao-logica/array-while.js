//criar um array com números randomicos(aleatório) não repetidos
function generateRandomInteger(max){
    return parseInt(Math.random() * max)
}

let arr = []

while(arr.length <= 20){
    let randomNumber = generateRandomInteger(30)

    if(arr.indexOf(randomNumber) < 0){
        arr.push(randomNumber)
    }
}
console.log(arr)