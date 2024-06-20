const btn1 = document.querySelector("#btn1");

// Using onclick function
// btn1.onclick = () => {
//     if (btn1.innerText == "Dark mode"){
//         document.body.style.backgroundColor = "Black";
//         btn1.innerText = "Light mode";
//     }
//     else {
//         document.body.style.backgroundColor = "White";
//         btn1.innerText = "Dark mode";
//     }
// }

// using addEventListener method
btn1.addEventListener("click", () => {
    if (btn1.innerText == "Dark mode") {
        document.body.style.backgroundColor = "Black";
        btn1.innerText = "Light mode";
    } else {
        document.body.style.backgroundColor = "White";
        btn1.innerText = "Dark mode";
    }
}
)