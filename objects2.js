const pessoa = {
    nome: "Maria",
    idade: 28,
    email: "ela@serve.com"
}

// iteraçao sobre objects

for(let prop in pessoa) {
    console.log(prop)
    console.log(pessoa[prop])
}