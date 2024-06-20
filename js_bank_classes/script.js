class Bank {
    a= 5;
    constructor (balance) {
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
    console.log(this.balance)
    }
    withdraw(amount) {
        if (this.balance < amount) {
            alert('Sorry, Not Enough Balance')
            return;
    
        } else {
        this.balance -= amount

        console.log(this.balance)
    }}
}
const ac1 = new Bank (10000)

const depositBtn = document.getElementById('depositBtn')

const withdrawBtn = document.getElementById('withdrawBtn')

let amount = document.querySelector('input')
const totalBlnc = document.getElementById('totalBlnc')
totalBlnc.innerText = ac1.balance
depositBtn.onclick = () => {
   ac1.deposit(Number(amount.value))
   totalBlnc.innerText = ac1.balance
}
withdrawBtn.onclick = () => {
   ac1.withdraw(Number(amount.value))
   totalBlnc.innerText = ac1.balance
   
}