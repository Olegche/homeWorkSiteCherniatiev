// Задача. Розробити клас MultChecker для перевірки таблиці множення
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей

// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render

class MultChecker {
    constructor() {

        this.rightAnswearNumber = 0
        this.wrongAnswearNumber = 0
    }


    getRandom() {
        return Math.floor(2 + Math.random() * (9 - 2) + 2)

    }

    getNewTask() {
        this.num1 = 7
        this.spanNum1.innerText = this.num1
        this.num2 = this.getRandom()
        this.spanNum2.innerText = this.num2
    }

    onClick() {

        const userMult = parseInt(this.inpMultNumber.value)

        if (this.num1 * this.num2 == userMult)
            this.rightAnswearNumber++
        else
            this.wrongAnswearNumber++

        this.rightAnsSpan.innerText = this.rightAnswearNumber
        this.wrongAnsSpan.innerText = this.wrongAnswearNumber

        this.ansSpan.innerText = `${this.num1} * ${this.num2} = ${this.num1*this.num2}`
        this.getNewTask()

    }

    render() {
        let div = document.createElement('div')

        let lbl = document.createElement('label')
        lbl.innerText = ' Перше число '
        this.spanNum1 = document.createElement('span')
        lbl.appendChild(this.spanNum1)
        div.appendChild(lbl)

        lbl = document.createElement('label')
        lbl.innerText = ' Друге число '
        this.spanNum2 = document.createElement('span')
        lbl.appendChild(this.spanNum2)
        div.appendChild(lbl)

        lbl = document.createElement('label')
        lbl.innerText = ' Множення чисел'
        this.inpMultNumber = document.createElement('input')
        this.inpMultNumber.value = '0'
        lbl.appendChild(this.inpMultNumber)
        div.appendChild(lbl)

        let btn = document.createElement('button')
        btn.innerText = ' Перевірити'
        btn.onclick = this.onClick.bind(this)
        div.appendChild(btn)

        let spanDiv = document.createElement('div')
        spanDiv.innerText = 'Кількість правильних : '
        this.rightAnsSpan = document.createElement('span')
        spanDiv.appendChild(this.rightAnsSpan)
        div.appendChild(spanDiv)

        spanDiv = document.createElement('div')
        spanDiv.innerText = 'Кількість неправильних : '
        this.wrongAnsSpan = document.createElement('span')
        spanDiv.appendChild(this.wrongAnsSpan)
        div.appendChild(spanDiv)

        spanDiv = document.createElement('div')
        spanDiv.innerText = 'Правильна відповідь : '
        this.ansSpan = document.createElement('span')
        spanDiv.appendChild(this.ansSpan)
        div.appendChild(spanDiv)

        this.getNewTask()
        return div


    }

}
window.onload = function () {
    const multChecker = new MultChecker()
    document.getElementById('container').appendChild(multChecker.render())
}