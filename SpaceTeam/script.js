function toTheMars() {
    let firstDiv = document.getElementById('accept')
    let h1 = document.createElement('h1')
    h1.innerText = 'Ви погоджуєтесь, що вся надана Вами інформація буде використана для підготовки бази данних з подальшим використанням для відправлення людей (і Вас в тому ж) числі на Марс ?'
    firstDiv.appendChild(h1)

    let btn = document.createElement('button')
    btn.innerText = "Погоджуюсь"
    firstDiv.appendChild(btn)
    btn.onclick = accept



}

function accept() {
    let divOk = document.getElementById('ok')
    let h2 = document.createElement('h2')
    h2.innerText = 'Клас! Ілон Вам зателефонує, не забудьте взяти зсобою достатню кількість сала та значок SpaceX, а поки заповніть табличку, вкажіть кого зсобою візьмете, скільки сала будуть брати зсобою ваші обранці, і хто за них платитиме? '
    divOk.appendChild(h2)

    class SpacexTeam {
        constructor(teamName) {
            this.teamName = teamName
            this.loadData()
        }
        saveData() {
            localStorage.setItem(this.teamName, JSON.stringify(this.team))
        }
        loadData() {
            if (localStorage.getItem(this.teamName) !== null) //Перевіряємо чи є продукти у сторі
                this.team = JSON.parse(localStorage.getItem(this.teamName)) //завантажуємо із стора
            else this.team = [] //список продуктів порожній
        }
        addPeople(personName, personAge, SaloCount, whoPay) {
            this.team.push({
                name: personName,
                age: personAge,
                salo: SaloCount,
                sponsor: whoPay
            })
        }
        filterBySalo(searchSalo) {
            return this.team.filter(product => product.salo >= searchSalo).sort((saloMin, saloMore) => saloMore.salo - saloMin.salo)
        }
        filterByname(serachName) {
            return this.team.filter(person => person.name === serachName)
        }
        filterBySponsor(searchSponsor) {
            return this.team.filter(name => name.sponsor === searchSponsor)
        }
        filterByAge() {
            return this.team.filter(person => person.age >= 18 && person.age <= 65).sort((young, old) => young.age - old.age)
        }
       

        onAdd() {
            const personName = this.inpname.value
            const SaloCount = parseInt(this.inpsalo.value)
            const whoPay = this.inpSponsor.value
            const personAge = parseInt(this.inpAge.value)
            this.addPeople(personName, personAge, SaloCount, whoPay)
            this.saveData()
            this.render()

        }
        createinputForm() {
            let div = document.createElement('div')
            let label = document.createElement('label')
            label.innerText = 'Ім\'я'
            this.inpname = document.createElement('input')
            label.appendChild(this.inpname)
            div.appendChild(label)

            label = document.createElement('label')
            label.innerText = 'вік'
            this.inpAge = document.createElement('input')
            label.appendChild(this.inpAge)
            div.appendChild(label)

            label = document.createElement('label')
            label.innerText = 'кількість кг сала'
            this.inpsalo = document.createElement('input')
            label.appendChild(this.inpsalo)
            div.appendChild(label)

            label = document.createElement('label')
            label.innerText = 'хто буде платити?'
            this.inpSponsor = document.createElement('input')
            label.appendChild(this.inpSponsor)
            div.appendChild(label)

            const btn = document.createElement('button')
            btn.innerText = 'Додати в команду'
            btn.onclick = this.onAdd.bind(this)
            div.appendChild(btn)
        
            return div
            
        }
        getTeamTable(teamList) {
            const table = document.createElement('table')
            table.border = "1px"
            table.style.border = "3px solid green"
            let tr = document.createElement('tr')
            let th = document.createElement('th')
            th.innerText = 'Ім\'я'
            tr.appendChild(th)

            th = document.createElement('th')
            th.innerText = 'скільки років'
            tr.appendChild(th)

            th = document.createElement('th')
            th.innerText = 'кількість кг сала '
            tr.appendChild(th)

            th = document.createElement('th')
            th.innerText = 'хто буде платити?'
            tr.appendChild(th)
            table.appendChild(tr)

            for (let i = 0; i < teamList.length; i++) {
                tr = document.createElement('tr')
                let td = document.createElement('td')
                td.innerText = teamList[i].name
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = teamList[i].age
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = teamList[i].salo
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = teamList[i].sponsor
                tr.appendChild(td)

                table.appendChild(tr)
            }
            return table
        }
        render(containerId) {
            let container
            if (containerId !== undefined) {
                container = document.getElementById('containerId')
                this.container = container
            } else
                container = this.container
            container.innerHTML = ''
            let inpForm = this.createinputForm()
            container.appendChild(inpForm)
            const tbl = this.getTeamTable(this.team)
            container.appendChild(tbl)
            //створив таблиці з фільтром по імені
            let div = document.createElement('div')
            let h3 = document.createElement('h3')
            h3.innerText = 'список всіх космонавтів з іменем Ілон'
            div.appendChild(h3)
            const tblSortByName = this.getTeamTable(this.filterByname('Ілон'))
            div.appendChild(tblSortByName)
            container.appendChild(div)

            div = document.createElement('div')
            h3 = document.createElement('h3')
            h3.innerText = 'список всіх космонавтів в межах 21-65 років, від молодших до старшого'
            div.appendChild(h3)
            const tblSortByAge = this.getTeamTable(this.filterByAge())
            div.appendChild(tblSortByAge)
            container.appendChild(div)
            //створив таблиці з фільтром по салу
            div = document.createElement('div')
            h3 = document.createElement('h3')
            h3.innerText = 'список всіх космонавтів хто бере з собою більше 100 кг сала (від більшої кількості сала до меншої)'
            div.appendChild(h3)
            const tblSortBySalo = this.getTeamTable(this.filterBySalo(100))
            
            div.appendChild(tblSortBySalo)
            container.appendChild(div)
            //створив таблиці з фільтром по спонсору
            div = document.createElement('div')
            h3 = document.createElement('h3')
            h3.innerText = 'список всіх космонавтів спонсором яких виступає Безос'
            div.appendChild(h3)
            const tblSortBySponsor = this.getTeamTable(this.filterBySponsor('Безос'))
            div.appendChild(tblSortBySponsor)
            container.appendChild(div)

        }


    }
    let team = new SpacexTeam('my space Team')
    team.render('containerId')

}



window.onload = function () {
    toTheMars()

}