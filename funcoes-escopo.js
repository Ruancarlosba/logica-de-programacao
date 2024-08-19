/*true é uma expressão que sempre avalia como verdadeira. Portanto, o bloco de código dentro do if será sempre executado.*/

let n = "global"

function mostraN() {
    let n1  = "n1 local"
 
    if(true) {

        let n2 = " n2 dentro de if com let" // se usar o var ,  a variável n2 estará disponível fora do bloco if
    }

    console.log(n2)
    console.log("valor de n1: "+n1)
}

mostraN()
console.log("o valor de n no escopo global: " +n)

function fnExt() {
    let n = "n local na dunçao fnExt"

    function fnInt() {
        let n = "n local na dunçao fnInt"
        console.log(n)
    }
    fnInt()
    console.log(n)
}

fnExt()
