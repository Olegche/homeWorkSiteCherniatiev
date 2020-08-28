function calc() {
    let inp = document.getElementById('year')
    let year = parseInt(inp.value)
    let today = new Date()
    let data = today.getFullYear()
    let age = data - year
    let res = document.getElementById('res')
    res.value = age
}

window.onload= function () {
    let btn = document.getElementById('btn')
    btn.onclick = calc
    let btn2 = document.getElementById('btn2')
    btn2.onclick = totalPrice

}


function totalPrice(){
    let inpAir = document.getElementById('airplane')
    let air = parseInt(inpAir.value)
    let airPrice = 1000
    let airTotal = air * airPrice

    let inpYacht = document.getElementById('yacht')
    let yacht = parseInt(inpYacht.value)
    let YachtPrice = 180
    let YachtTotal =  yacht * YachtPrice

    let inpCar = document.getElementById('car')
    let car = parseInt(inpCar.value)
    let carPrice = 100
    let carTotal =  car * carPrice

    let inpDrone = document.getElementById('drone')
    let drone = parseInt(inpDrone.value)
    let dronePrice = 153
    let droneTotal =  drone * dronePrice

    let inpSatellite = document.getElementById('satellite')
    let satel = parseInt(inpSatellite.value)
    let satellitePrice = 99
    let satelliteTotal =  satel * satellitePrice


    let res = document.getElementById('res2')
    res.value = airTotal + YachtTotal + carTotal + droneTotal + satelliteTotal
}

