// console.log('Inicio');
// const arrayNumbers = [12, 23, 45,55, 68, 70, 90]
// let count = 0
// const arrayAux = []
// let functionsetinterval = setInterval(() => {
//     arrayAux.push(arrayNumbers[count])
//     const numbers = document.querySelector(".numbers")
//     numbers.innerHTML = arrayAux
    
//     if (arrayAux.length == arrayNumbers.length) {
//         clearTimeout(functionsetimeout)
//         clearInterval(functionsetinterval)
//         alert('Encerrou!');
//     }
//     count++
// },1500)

// let functionsetimeout = setTimeout(() => { 
    
// },5000)
// console.log('logica');

// let isFinish = false
// if (isFinish) {
//     clearTimeout(functionsetimeout)
//     clearInterval(functionsetinterval)
        
// }

// console.log(functionsetinterval);
// console.log(functionsetimeout);

// console.log('Logica');
// console.log('Fim');


// >>>>>>>>>> Promises <<<<<<<<<<<<<<

// Pending - Fulfilled - Rejected - Settled

console.log('Fazer requisição');

const promise = new Promise((resolve, reject) => {
    let situation = false
    if (situation) {
        return resolve('Resposta do Banco de Dados!')
    } else {
        // return reject('Sem resposta!')
    }
})

// console.log(promise);

// promise
//     .then((answer) => console.log(answer))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Requisição concluída!'))

// async function requestData() {
//         try {
//                 const response = await promise
//                 console.log(response);
//             } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('Requisição concluída!');
//     }
// }

// requestData()
// console.log('Finalizar requisição');

// console.log('Início');

// const userName = 'EmanuelQuintino'
// const url = `https://api.github.com/users/${userName}`
// const gitHubUser = fetch(url)
//     .then(request => request.json())
//     .then(({ name, bio }) => ({
//             name,
//             bio,
//         }))

// console.log(gitHubUser);

// gitHubUser
    .then((user) => {
      console.log(`${user.name}: ${user.bio}`);
    })
    .catch((error) => console.log(error))

    async function userGitHubData(user) {
        try {
            await fetch (`https://api.github.com/users/${user}`)
            .then((request) => request.json())
            .then((data) => console.log(`${data.name}: ${data.bio}`))           
            
        } catch (error) {
            console.log(error);
        }
        
    }

    userGitHubData('EmanuelQuintino')
    userGitHubData('Mario13Sergio')
    userGitHubData('felipeuenes')
    // userGitHubData('')


