
// const getData1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("Success");
//         }, 2000);
//     })
// }
// const getData2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("Success");
//         }, 2000);
//     })
// }

// console.log("Fetching data 1");
// getData1().then((res) => {
//     console.log("Fetching data 2");
//     getData2().then((res) => {})
// })

// using promises
const getData = (dataId, getNextData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data not Found");
            reject(404);
            if (getNextData){
                getNextData();
            }
        }, 5000)
    })
}

getData(1).then((res) => {
    console.log(res);
    
})

// Using callbacks
// const getData = (dataId, getNextData) => {
//     setTimeout(() => {
//         console.log("Data", dataId);
//         if (getNextData){
//             getNextData();
//         }
//     }, 2000)
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });
