// sintaxe formal 

const arr = new Array()
const arr2  = new Array(true, "Daniel,", 28, new Array(2, 4, 10))
arr[0] = "Daniel"
arr[1] = 40

console.log(arr)
console.log(arr2[3][1]) 
console.log(arr2[3].length)// para saber quantos elementos  o  array tem ,  utilize  o length.
console.log(arr2[3][arr2[3].length -1]) // para pegar a ultima posiçao do array

//sintaxe literal

const arr3  = ["Danile", 40, [3, 6 ,9], true]
arr3[4] = "novo valor"
arr3[arr3.length] = "novo valor 2"
arr3.push("adicionado com o método push()")
arr3.push("a","b","c")

console.log(arr3)
console.log(arr3[2])
console.log(arr3[2][0])