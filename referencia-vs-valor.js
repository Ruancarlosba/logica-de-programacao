function alteraArray(a) {
    a.push("adicionado")
}

let arr = ["a"]
console.log(arr)
alteraArray(arr)
console.log(arr)

console.log("============================")

function alteraPrimitivo(p) {
    p+= "adicionado"
    console.log("dentro da funçao: ", p)
}

let msg = "mensagem"

console.log(msg)
alteraPrimitivo(msg)
console.log(msg)
