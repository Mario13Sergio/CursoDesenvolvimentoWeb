// >>>>> DATA MANIPULATION <<<<<<

// PROTOTYP (CHAIN)

//  function Car (motorPower) {
//      this.motor = motorPower
//  }

//  console.log(new Car ("v8").motor)


//   let myName = "Mario"
//   let age = 40

//   console.log(myName.__proto__)
//   console.log(age.__proto__)

// >>>>> string <<<<<<

// let phrase = 'Eu sou Web Developer'

//  console.log(myName.length)
//  console.log(myName[1])
//  console.log(myName.toLocaleUpperCase())

//  console.log(phrase.split(",")) 
//  console.log(phrase.split(" "))
//  console.log(phrase.split(" ").join(" "))



// console.log("Web" == "Web") 
// console.log(myName.toLocaleUpperCase().incluse*("WEB"))




// // >>>>>>>>>>> Number Manipulation <<<<<<<<<<<<

// let num = 793
// let num1 = 7.287
// let num2 = -7.9876


// console.log(String(num).length)
// console.log(String(num1).replace(".","").length)
// console.log("R$ " + String(num1.toFixed(2)).replace(".",","))
// console.log(String(num1.toFixed(2))


// International Standard Currency Code ISO 4217 
//  console.log(num1.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})) 
//  console.log(num1.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})) 
//  console.log(num1.toLocaleString('pt-br', {style: 'currency', currency: 'eur'})) 
//  console.log(num1.toLocaleString('pt-br', {style: 'currency', currency: 'jpy'})) 

// console.log(Math.sqrt(81))
// console.log(Math.PI)
// console.log(Math.abs(num2))

// console.log(Math.max(12, 34, 4, 98, 32, 56 ,178 ,12, 43, 65))
// console.log(Math.min(12, 34, 4, 98, 32, 56 ,178 ,12, 43, 65))


//  console.log(Math.ceil(num1))
//  console.log(Math.round(num1))
//  console.log(Math.floor(num1))
// console.log(Math.floor(num1))
// 
//  console.log(Math.round(Math.random()*75))



// >>>>>>>>>>>>>> Date Manipulation <<<<<<<<<<<<

date = new Date()
let date1 = new Date('2022-11-17 12:03:19')
let date2 = new Date('2022-11-18 15:03:19')

// document.write(date)

// document.write(date1.getHours())
// document.write(date1.getMinutes())
// document.write(date1.getSeconds())

document.write(´${String(hour).padStart(2, "0")}:{String(minuts)).padStart(2, "0"):{String(seconds).padStart(2, "0")})




//  document.write(date1.toLocaleTimeString("pr-BR"))
//  document.write(date.toLocaleTimeString("pr-BR"))
 
// document.write(date.getDay()) // 0 - 6
// document.write(date.getDate())
// document.write(date.getMonth() + 1) // 0 - 11
// document.write(date.getFullYear())

// document.write(date.getDate() + "/" + date.getMonth  () + "/" + date.getFullYear())

// document.write(date.toLocaleDateString("pt-BR"))


// date1.setSeconds(date1.getSeconds() + 157)
// date1.setMinutes(date1.getMinutes() + 56)
// date1.setHours(date1.getHours() + 23)

// date1.setDate(date1.getDate() + 20)
// date1.setMonth(date1.getMonth() + 13)
// date1.setFullYear(date1.getFullYear() + 20)

// document.write(date.toLocaleString("pr-BR")) 
// document.write(date1.toLocaleString("pr-BR"))
// document.write(date2.toLocaleString("pr-BR"))


                                                //   s     m    h    d
// document.write(Math.floor(Math.abs(date1 - date2) / 1000 / 60 / 60 / 24))