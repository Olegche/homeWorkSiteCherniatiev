function Auto(brand, fuelTank, fuelLiters, countPlace, countPasangers) {
    
    this.brand = brand
    this.fuelTank = parseInt(fuelTank)
    this.fuelLiters = parseInt(fuelLiters)
    this.countPlace = parseInt(countPlace)
    this.countPasangers = parseInt(countPasangers)
}

Auto.prototype.getFuelLitter = function (litters) {
    if ((this.fuelLiters + litters) <= this.fuelTank)
    this.fuelLiters += litters
    else
    this.fuelLiters = ' Easy! You wanna to refuel more then the volume of fuel tank'

}

Auto.prototype.getPasangers = function (pasangers) {
    if ((this.countPasangers + pasangers) <= this.countPlace)
    this.countPasangers += pasangers
    else
    this.countPasangers = `wow wow, Tiger! ${this.brand} is not rubber, to much passangers`

}

Auto.prototype.takeOfPasangers = function (pasangers) {
    if (this.countPasangers > pasangers) 
    this.countPasangers -= pasangers
    else
    this.countPasangers = 'You wanna to drop off more passangers then you have them'

}

Auto.prototype.showPasangers = function () {
    document.write(` Number of passangers  : ${this.countPasangers }`)
}

Auto.prototype.toString = function () {
    return `${this.brand} - fuel tnak : ${this.fuelTank}, litters : ${this.fuelLiters} litters, places :${this.countPlace}, pasangers : ${this.countPasangers } `
}

const auto1 = new Auto ('Audi', 90, 30, 5, 2)
document.write(auto1 + '<br>')
auto1.getFuelLitter(20)
document.write(auto1 + '<br>')
auto1.getPasangers(3)
document.write(auto1 + '<br>')
auto1.takeOfPasangers(2)
document.write(auto1 + '<br>')
auto1.showPasangers()