// Solicite 2 números e apresente:
// Crie constantes com as operações de +, -, *, /, %, ** e raiz para os números solicitados.
// Apresente as operaçôes e os resultados escrevendo no documento (função write).

const numberOne = Number(prompt("Digite o primeiro número: "))
const numberTwo = Number(prompt("Digite o sugundo número: "))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mul = numberOne * numberTwo
const divi = numberOne / numberTwo
const rem = numberOne % numberTwo
const exp = numberOne ** numberTwo
const sqr = numberOne ** (1/numberTwo)

document.write(`A soma de ${numberOne} e ${numberTwo} = ${sum} <br>`)
document.write(`A subtração de ${numberOne} e ${numberTwo} = ${sub} <br>`)
document.write(`A multiplicação de ${numberOne} e ${numberTwo} = ${mul} <br>`)
document.write(`A divisão de ${numberOne} e ${numberTwo} = ${divi.toFixed(2)} <br>`)
document.write(`O resto da divisão de ${numberOne} e ${numberTwo} = ${rem} <br>`)
document.write(`A potência de ${numberOne} elevado a ${numberTwo} = ${exp} <br>`)
document.write(`A raiz ${numberTwo} de ${numberOne} = ${sqr.toFixed(2)} <br>`)