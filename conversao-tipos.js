/*conversaõ implícita - refere-se ao processo pelo qual o JavaScript automaticamente converte um tipo de dado em outro quando necessário. no caso do código abaixo o sinal do "+"  naõ funciona porque o "+" também é usado para concatenaçao  */
let n1 = 10;
let n2 = "2";

console.log(n1 + n2, typeof n1, typeof n2);

// parseInt, parseFloat, Number()

let n3 = "10";
n3 = parseInt(n3);

let n4 = 2;

console.log(n3 + n4, typeof n3, typeof n4);

/*toString - é utilizado para converter e representar um objeto como uma string. Quando você chama toString() em um objeto, o JavaScript retorna uma string que descreve o objeto. 

é tambem pode ser usado para converter números em diferentes sistemas numéricos.
Exemplos : 
 - Para converter um número para binário, você passa 2 como argumento.
 - Para converter um número para octal, você passa 8 como argumento.
 - Para converter um número para hexadecimal, você passa 16 como argumento.
  */

let numero = 11;
numero = numero.toString(16);
console.log(numero, typeof numero);
