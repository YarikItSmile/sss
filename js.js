let hello = setInterval(timer, 1000)
let g = document.getElementById('days')
let gg = document.getElementById('hours')
let ggg = document.getElementById('minutes')
let gggg = document.getElementById('seconds')

let d = document.getElementById("dd")

function timer () {
    let today = new Date()
    let today1 = Date.parse(today)

    let birthday = "2020-09-01"
    let birthday1 = Date.parse(birthday)

    let translate = birthday1-today1

    let day = Math.floor(translate/1000/60/60/24)
    let hour = Math.floor(translate/1000/60/60%24)
    let minute = Math.floor(translate/1000/60%60)
    let seconds = Math.floor(translate/1000%60)
    
    g.innerHTML=day
    gg.innerHTML=hour
    ggg.innerHTML=minute
    gggg.innerHTML=seconds

    dd.innerHTML="До первого сентебря:"
}