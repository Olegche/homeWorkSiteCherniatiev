

function calcSum() {
    let inp1 = document.getElementById('num1')
    let number1 = parseInt(inp1.value)
    let inp2= document.getElementById('num2')
    let number2 = parseInt(inp2.value)

    let sum = number1 + number2

    let result = document.getElementById('res')
    result.value = sum
}

function calcMin() {
    let inp1 = document.getElementById('num1')
    let number1 = parseInt(inp1.value)
    let inp2= document.getElementById('num2')
    let number2 = parseInt(inp2.value)

    let minus = number1 - number2

    let result = document.getElementById('res')
    result.value = minus
}

function calcMult() {
    let inp1 = document.getElementById('num1')
    let number1 = parseInt(inp1.value)
    let inp2= document.getElementById('num2')
    let number2 = parseInt(inp2.value)

    let mult = number1 * number2

    let result = document.getElementById('res')
    result.value = mult
}

function calcDiv() {
    let inp1 = document.getElementById('num1')
    let number1 = parseInt(inp1.value)
    let inp2= document.getElementById('num2')
    let number2 = parseInt(inp2.value)

    let division = number1 / number2

    let result = document.getElementById('res')
    result.value = division
}

window.onload = function () {
    let btn = document.getElementById('add')
    btn.onclick = calcSum
    let btn2 = document.getElementById('min')
    btn2.onclick = calcMin
    let btn3 = document.getElementById('mult')
    btn3.onclick = calcMult
    let btn4 = document.getElementById('div')
    btn4.onclick = calcDiv
    let btnConv = document.getElementById('btnConv')
    btnConv.onclick = conv
}

 function conv() {
     let input = document.getElementById('uah')
     let inUA = parseInt(input.value)

     let resUSA =  (inUA / 27.2).toFixed(2)
     let resEURO = (inUA / 32.38).toFixed(2)
     let resultUSA = document.getElementById('dollar')
     resultUSA.value = resUSA
     let resultEURO = document.getElementById('euro')
     resultEURO.value = resEURO
 }



