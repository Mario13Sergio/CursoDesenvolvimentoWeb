console.log('Inicio');
const arrayNumbers = [12, 23, 45,55, 68, 70, 90]
let count = 0
const arrayAux = []
let functionsetinterval = setInterval(() => {
    arrayAux.push(arrayNumbers[count])
    const numbers = document.querySelector(".numbers")
    numbers.innerHTML = arrayAux
    
    if (arrayAux.length == arrayNumbers.length) {
        clearTimeout(functionsetimeout)
        clearInterval(functionsetinterval)
        alert('Encerrou!');
    }
    count++
},1500)

let functionsetimeout = setTimeout(() => { 
    
},5000)
console.log('logica');

let isFinish = false
if (isFinish) {
    clearTimeout(functionsetimeout)
    clearInterval(functionsetinterval)
        
}

console.log(functionsetinterval);
console.log(functionsetimeout);

console.log('Logica');
console.log('Fim');


