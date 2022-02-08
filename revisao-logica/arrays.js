//espaço na memória que utilizamos para armazenar um conjunto de dados
const arr = new Array()
console.log(typeof arr)
console.log(arr)

//podemos criar o array e já passar os valores, sendo possível adicionar dados de diferentes tipos, i
//nclusive é possível adicionar outro array dentro de um array
const arr2 = new Array(true, "Amanda", 24, new Array(2, 4, "Maria"))
console.log(arr2)

//podemos passar os valores informando a posição 
arr[0] = "Amanda" //o indice 0 recebe o valor "Amanda"
arr[1] = 24
console.log(arr)

//visualizando por indice o array
console.log(arr2[1])

// maneira literal de construir um array, mais utilizada:
const arr3 = ["Maria", 22, [24, 20, 17], true]
console.log(arr3)

//diferentes maneiras de adicionar um valor no array
arr3[4] = "a"
arr3[arr3.length] = "b"
arr3.push("c")  //adicionando com o método push, o mais ideal
arr3.push(1, 2, 3)
console.log(arr3)