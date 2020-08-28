function createTable () {
    let theYears = parseInt(document.getElementById('inpYears').value)
    let tableBody = document.querySelector('tbody')
    tableBody.innerHTML = ''

    for (let i = 0; i < theYears; i++) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')

        let inp1 = document.createElement('input')
        inp1.setAttribute('type', 'number')
        inp1.setAttribute('class', 'year')
        td1.appendChild(inp1)
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        let inp2 = document.createElement('input')
        inp2.setAttribute('type', 'number')
        inp2.setAttribute('class', 'income')
        td2.appendChild(inp2)
        tr.appendChild(td2)

        tableBody.appendChild(tr)
    }

}

function getIncome() {
let table = document.querySelector('tbody')
let inpIncome = table.getElementsByClassName('income')


 let res = 0 

 for (let i = 0; i < inpIncome.length; i++) {
     let incomeFor1Year = parseFloat(inpIncome[i].value)

     res += incomeFor1Year
     
 }

 let tax = 0.05
 let taxCheck = document.getElementById('taxCheck')
 if (taxCheck.checked) {
    tax = 0.03
}

let totalResult =  res - (res * tax) 

 document.getElementById('inpResincome').value = totalResult
 document.getElementById('inpTax').value = res * tax
 
}

window.onload = function () {
    document.getElementById('inpYears').onchange = createTable
    document.getElementById('resBtnIncome').onclick = getIncome
}