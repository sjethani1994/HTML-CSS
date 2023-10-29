async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Rejected:", error);
    throw error;
  }
}

const container = document.getElementById('cardsSection');

fetchData()
  .then((data) => {
    console.log("Resolved:", data);
  })
  .catch((error) => {
    console.error("Rejected:", error);
  });

//promise
// age = 30;
// function simulateAPIPromise(age) {
//   const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Printing within SetTimeout");
//       if (age > 25) {
//         resolve({ id: 1, name: "Snehal" });
//       } else {
//         reject("Age is not proper");
//       }
//     }, 3000);
//   });
//   return prom;
// }

// FunctionResponse = simulateAPIPromise(20);
// console.log("result", FunctionResponse);
// //.then
// FunctionResponse.then((result) => {
//   console.log(result);
// });
// FunctionResponse.catch((error) => {
//   console.log(error);
// });

// //async and await ES6
// //
// async function simulateApi() {
//     try{
//   result = await simulateAPIPromise(30);
//   console.log(result);
//     }
//     catch{
//         e
//     }
// }
// simulateApi();

// result=fetch("url")
