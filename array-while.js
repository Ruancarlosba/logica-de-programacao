//Criar um array com números randomicos naõ repetidos

function generateRandomInteger(max) {
    return parseInt(Math.random() * max)
}

let arr = []
while(arr.length <= 20) {
    let randomNumber = generateRandomInteger(30)
    

    if(arr.indexOf(randomNumber) < 0) {
        arr.push(randomNumber)
    } else {
        console.log(randomNumber, "já existe no arr")
    }
}
console.log(arr)