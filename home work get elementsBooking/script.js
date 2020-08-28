function createTable() {
    let clientsQuantity = parseInt(document.getElementById('inpClietnsNum').value)
    let tableBody = document.querySelector('tbody')
    tableBody.innerHTML = ''

    for (let i = 0; i < clientsQuantity; i++) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')

        td.innerText = `client # ${i + 1}`
        tr.appendChild(td)


        let td2 = document.createElement('td')
        let inp2 = document.createElement('input')
        inp2.setAttribute('type', 'text')
        inp2.setAttribute('class', 'name')
        td2.appendChild(inp2)
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        let inp3 = document.createElement('input')
        inp3.setAttribute('type', 'number')
        inp3.setAttribute('class', 'dateYear')
        td3.appendChild(inp3)
        tr.appendChild(td3)

        let td4 = document.createElement('td')
        let checkBoxBreakfast = document.createElement('input')
        td4.innerText = `breakfast 10$`
        checkBoxBreakfast.setAttribute('type', 'checkBox')
        checkBoxBreakfast.setAttribute('class', 'checkBreakfast')
        td4.appendChild(checkBoxBreakfast)
        tr.appendChild(td4)

        let td5 = document.createElement('td')
        let checkBoxLunch = document.createElement('input')
        td5.innerText = `lunch 15$`
        checkBoxLunch.setAttribute('type', 'checkBox')
        checkBoxLunch.setAttribute('class', 'checkLunch')

        td5.appendChild(checkBoxLunch)
        tr.appendChild(td5)

        let td6 = document.createElement('td')
        let checkBoxDiner = document.createElement('input')
        td6.innerText = `diner 25$`
        checkBoxDiner.setAttribute('type', 'checkBox')
        checkBoxDiner.setAttribute('class', 'checkDiner')

        td6.appendChild(checkBoxDiner)
        tr.appendChild(td6)

        tableBody.appendChild(tr)
    }
}

function totalSum() {
    let table = document.querySelector('tbody')
    let inpBreakfast = table.getElementsByClassName('checkBreakfast')
    let inpLunch = table.getElementsByClassName('checkLunch')
    let inpDiner = table.getElementsByClassName('checkDiner')

    let breakfast = 0
    let lunch = 0
    let diner = 0

    for (let i = 0; i < inpBreakfast.length; i++) {
        if (inpBreakfast[i].checked)
            breakfast += 1

    }

    for (let i = 0; i < inpLunch.length; i++) {
        if (inpLunch[i].checked)
            lunch += 1
    }

    for (let i = 0; i < inpDiner.length; i++) {
        if (inpDiner[i].checked)
            diner += 1
    }

    let breakfastPrice = 10
    let lunchPrice = 15
    let dinerPrice = 25

    let totalBreakfast = document.getElementById('resBreakfast')
    totalBreakfast.value = breakfast * breakfastPrice

    let totalLunch = document.getElementById('resLunch')
    totalLunch.value = lunch * lunchPrice

    let totalDiner = document.getElementById('resDiner')
    totalDiner.value = diner * dinerPrice

    let names = table.getElementsByClassName('name')
    let container = document.createElement('div')

    let years = table.getElementsByClassName('dateYear')

    let eatBreakfast = table.getElementsByClassName('checkBreakfast')


    for (let i = 0; i < names.length; i++) {
        let container = document.createElement('div')
        container.innerText = `  client - ${i + 1} name: ${names[i].value}`
        document.getElementById('container').appendChild(container)
    }

    for (let j = 0; j < years.length; j++) {
        let container = document.createElement('div')
        container.innerText = ` client - ${j + 1} date of birth  ${years[j].value}`
        document.getElementById('container').appendChild(container)

    }

    for (let l = 0; l < eatBreakfast.length; l++) {
        let container = document.createElement('div')
        if (inpBreakfast[l].checked) {
            container.innerText = ` client - ${l + 1} decided to eat breakfast`
            document.getElementById('container').appendChild(container)
        }

    }

    let eatLunch = table.getElementsByClassName('checkLunch')
    for (let q = 0; q < eatLunch.length; q++) {
        let container = document.createElement('div')
        if (inpLunch[q].checked) {
            container.innerText = ` client - ${q + 1} decided to eat lunch`
            document.getElementById('container').appendChild(container)
        }

    }

    let eatDiner = table.getElementsByClassName('checkDiner')
    for (let x = 0; x < eatDiner.length; x++) {
        let container = document.createElement('div')
        if (inpDiner[x].checked) {
            container.innerText = ` client - ${x + 1} decided to eat Diner`
            document.getElementById('container').appendChild(container)
        }
    }

}




window.onload = function () {

    document.getElementById('inpClietnsNum').onchange = createTable
    document.getElementById('btnResult').onclick = totalSum
}