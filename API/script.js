let dogImage = document.getElementById('dogImages')
let newDogButton = document.querySelector('button')
const getNewDog = () => {
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
    dogImage.innerHTML = `<img src = '${json.message}' width='300px' height = '300px'/>`
})
}
newDogButton.onclick = () => getNewDog()
console.log('run Third')

