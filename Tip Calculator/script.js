let billTotalInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let numberOfPeople = document.getElementById("numberOfPeople");
let perPersonTotalDiv = document.getElementById("perPersonTotal");


let number = parseInt(numberOfPeople.innerText)
const calculateBill = () => {
    let bill = Number(billTotalInput.value)
    let tipPercentage = Number(tipInput.value) / 100
    let tipAmount = bill * tipPercentage

    let total = bill + tipAmount

    let totalPerPerson = total / number

    perPersonTotalDiv.innerText = totalPerPerson.toFixed(2)

}

const increasePeople = () => {
    number += 1
    numberOfPeople.innerText = number
    calculateBill()
}
const decreasePeople = () => {
    if (number <= 1) {
        throw ('Hey, Persons not be less than 1')
        return;
    }
    number -= 1
    numberOfPeople.innerText = number
    calculateBill()
}
