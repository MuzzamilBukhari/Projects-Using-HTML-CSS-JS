let inputBox = document.querySelector("input");
let imgBox = document.querySelector(".img-box");

const generateCode = () => {
    let data = inputBox.value;
    if (data === ""){
        imgBox.innerHTML = "<p>Please enter any text or URL</p>";
    } else {
        imgBox.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}" alt="An error occured">`;
    }

}