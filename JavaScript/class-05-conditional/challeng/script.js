// Crie um algoritmo que solicite o Nome e Notas 1 e 2 do aluno
// Crie uma função para calcular a sua média
// Depois apresente o nome do aluno sua media e sua situação
// O aluno será aprovado somente SE ele teve média maior ou igual 7. 


let Aluno = window.prompt("nome do aluno")
let nota1 = Number(window.prompt("digite nota1"))
let nota2 = Number(window.prompt("digite nota2"))
// window.prompt ("digite nota2")
// window.prompt ("media")

// console.log(media)
function muFunction() {
    return (nota1 + nota2) / 2
}
const media = muFunction(nota1, nota2)
let mensagem
if (media >= 7) {
    mensagem = "aprovado"
}
else {
    mensagem = "reprovado"
}

document.write(`O ${Aluno} teve media de ${media} e foi ${mensagem} `)


// window.alert(`O ${Aluno} teve media de ${media} e foi ${mensagem} ` )
