
// const promise1 = new Promise((resolve, reject) => {
//  setTimeout(() => {
//     //  console.log('soup is ready')
//      isReady = false
//      isReady ? console.log('soup is Ready'): console.log('no soup today')
//  }, 5000)
// })





const imgContainer = document.querySelector("#imgContainer");
const img = document.createElement("img");



const getMyDOg = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    img.src = data.message;
    img.width = 1000;
    img.height = 1000;
    imgContainer.appendChild(img);
    console.log(data.message)
}
getMyDOg()