// Array to hold the products
let productsList = [];

// Function to fetch product data
async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const container = document.getElementById("productSection");

    productsList = data.products;
    displayProducts(productsList, container);
  } catch (error) {
    console.error("Rejected:", error);
    throw error;
  }
}

// Initial fetching of data
fetchData();

// Function to display products
function displayProducts(products, container) {
  container.innerHTML = "";
  let rowContent = "";
  for (let i = 0; i < products.length; i++) {
    if (i % 3 === 0) {
      rowContent += `<div class="col-sm-0 col-lg-1"></div>`;
    }
    rowContent += `
             <div class="col-sm-12 col-lg-3">
                 <div class="card w-100">
                     <div class="card-body">
                         <div class="row">
                             <div class="col-md-5 ${i === 0 ? "p-0" : ""}">
                                 <img src="${
                                   products[i].thumbnail
                                 }" alt="Image" class="img-fluid" style="height: 240px;" />
                             </div>
                             <div class="col-md-7 custom-card-body">
                                 <h5 class="card-title">${
                                   products[i].brand
                                 }</h5>
                                 <p class="card-text">${
                                   products[i].description
                                 }</p>
                                 <p class="card-text">Price: $${
                                   products[i].price
                                 }</p>
                                 <button class="btn btn-outline-dark mt-3" onclick="handleClick(${
                                   products[i].id
                                 })">Read More</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         `;

    if ((i + 1) % 3 === 0 || i === products.length - 1) {
      rowContent += `<div class="col-sm-0 col-lg-1"></div>`;
      container.innerHTML += `<div class="row"  style="justify-content: space-around;margin-bottom: 20px;">${rowContent}</div>`;
      rowContent = "";
    }
  }
}

// Function to handle the click event
function handleClick(id) {
  console.log(id);
}

// Function to handle keyup event for search
function handleKeyUp(e) {
  if (e.key !== " " && e.key !== "Spacebar") {
    const searchKey = e.target.value.trim();
    if (searchKey !== "") {
      const searchResult = searchProducts(searchKey, productsList);
      const container = document.getElementById("productSection");
      displayProducts(searchResult, container);
    } else {
      const container = document.getElementById("productSection");
      displayProducts(productsList, container);
    }
  }
}

// Function to search products based on the search key
function searchProducts(searchKey, products) {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchKey.toLowerCase())
  );
}
