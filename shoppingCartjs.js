// Array to hold the products
let productsList = [];
let cart = [];
let totalPrice = 0;
let count = 0;
// Function to fetch product data
async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    productsList = data.products;
    displayProducts(productsList, document.getElementById("productSection"));
  } catch (error) {
    console.error("Rejected:", error);
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
                        <h5 class="card-title">Brand : ${products[i].brand}</h5>
                        <h5 class="card-title">Category : ${
                          products[i].category
                        }</h5>
                        <p class="card-text">Description : ${
                          products[i].description
                        }</p>
                        <p class="card-text fw-bold" style="padding-top: 18px;">Price: $${
                          products[i].price
                        }</p>
                    </div>
                </div>
            </div>
            <div class="card-footer" style="background-color: white;">
            <button class="btn btn-outline-success mt-3" onclick="addItem('${
              products[i].brand
            }', ${products[i].id}, ${products[i].price})">Add to Cart</button>
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
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchKey.toLowerCase()) ||
      product.category.toLowerCase().includes(searchKey.toLowerCase())
  );
}

function addItem(brand, productId, price, image) {
  cart.push({ name: brand, id: productId, price: price, image: image });
  totalPrice += price;
  count += 1;
  openModal();
  updateCart();
}

function removeItem(index) {
  totalPrice -= cart[index].price;
  count -= 1;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const total = document.getElementById("totalPrice");
  const badgeCount = document.getElementById("badge-count");
  // Clear the cart items
  while (cartItems.rows.length > 1) {
    cartItems.deleteRow(1);
  }

  // Update the cart items
  cart.forEach((item, index) => {
    const product = productsList.find((product) => product.id === item.id);

    const row = cartItems.insertRow(-1);

    const imgCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const priceCell = row.insertCell(2);
    const actionCell = row.insertCell(3);

    const img = document.createElement("img");
    img.src = product.thumbnail;
    img.alt = "Product Image";
    img.style.width = "50px";
    img.style.height = "50px";
    imgCell.appendChild(img);

    nameCell.textContent = item.name;
    priceCell.textContent = `$${item.price}`;

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-outline-danger");
    button.textContent = "Remove";
    button.onclick = () => removeItem(index);
    actionCell.appendChild(button);
  });

  total.textContent = totalPrice;
  badgeCount.textContent = count;
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
