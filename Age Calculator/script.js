
const displayMsg = (years, months, days) => {
    let msg = document.querySelector(".msg");
    msg.innerHTML = `You are ${years} years, ${months} months and ${days} days old`;
}

const calculateAge = () => {
    let todayDate = new Date ();
    let currYear = todayDate.getFullYear();
    let currMonth = todayDate.getMonth();
    let currDay = todayDate.getDate();
    let dobValue = document.querySelector("input").value;
    let birthDateInArray = dobValue.split("-");
    let birthYear = birthDateInArray[0];
    let birthMonth = birthDateInArray[1];
    let birthDate = birthDateInArray[2];

    let yearsDiff, monthsDiff, daysDiff;
    yearsDiff = currYear - birthYear;
    monthsDiff = currMonth + 1 - birthMonth;
    daysDiff = currDay - birthDate;
    if (monthsDiff < 0){
        yearsDiff--;
        monthsDiff += 12;
    }
    if (daysDiff < 0){
        monthsDiff--;
        daysDiff += getDaysInMonth(birthYear, birthMonth);
    }
    if (monthsDiff < 0){
        monthsDiff += 12;
        yearsDiff--;
    }
    displayMsg(yearsDiff, monthsDiff, daysDiff);
}

const getDaysInMonth = (year, month) => {
    return new Date (year, month, 0).getDate();
}
// console.log(date);