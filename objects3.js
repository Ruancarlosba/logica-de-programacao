//métodos de objeto

const produto = {
    nome: "caneta",
    qtd: 10,
    comprar: function(n) {
        console.log(this)
        if(n > this.qtd) {
            return "quatidade naõ disponivel"
        }
        this.qtd -= n // se n naõ for maior que qtd , entao o estoque irá diminuir
    },
    teste1: function() {
        console.log("teste1")
        console.log(this)
    },
    teste2: ()=>{
        console.log("teste2")
        console.log(this)
    }
}

produto.comprar(3)
//console.log(produto)

produto.comprar(13)
//console.log(produto)

produto.teste1()
produto.teste2() // o teste2  naõ funciona porque o this naõ retorna o object  e sim o object do window. 