const digitalClock = document.querySelector ("#clock")

setInterval() => {
    let date = new Date
    let hour = date.getMinutes()
    let Minutes = date.getMinutes()
    let Seconds = date.getSeconds()
    let milisecondos = date.getMilliseconds()

    digitalClock.innerHTML = ´$(String(hour)). padStart(2, "0"):$(String(hour)). padStart(2, "0")$(String(hour)). padStart(2, "0")`
}