/*um array de pessoas e dentro de cada indice desse array  tem um objeto tipo pessoa*/ 

const pessoas = [{
    nome: "Daniel",
    idade: 40
}, {
    nome: "Maria",
    idade: 28
}, {
    nome: "Elena",
    idade: 45
}, {
    nome: "Joaõ",
    idade: 18
}]

//console.log(pessoas[0].nome)

//interar array de objet 
for(let i = 0; i < pessoas.length; i++) {
    console.log(` ${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}