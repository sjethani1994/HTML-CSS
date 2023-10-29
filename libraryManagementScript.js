// Function to handle keyup event, avoiding triggering on space key
function handleKeyUp(e) {
  // Check if the key pressed is not a space key
  if (e.key !== " " && e.key !== "Spacebar") {
    searchBooks(); // Call the searchBooks function
  }
}

// Array of books with their details
const books = [
  {
    bookName: "Godan Munshi Premchand",
    author: "J Rantan and P.Lal",
    imagePath: "./assests/Godan-Munshi-Premchand.jpg",
    price: "$200",
    description:
      "Godan is one of the most celebrated novels of Munshi Premchand. It highlights the socio-economic challenges and struggles faced by the rural Indian population during the pre-independence era.",
  },
  {
    bookName: "HangWomen",
    author: "K.R. Meera",
    imagePath: "./assests/book-2.jpeg",
    price: "$300",
    description:
      "Hangwoman is a powerful novel that delves into the life of a woman executioner in a society that struggles with issues of caste, gender, and tradition.",
  },
  {
    bookName: "Midnight Children",
    author: "Salman Rushdie",
    imagePath: "./assests/Midnight-children.jpg",
    price: "$350",
    description:
      "Midnight's Children is a magical realist novel that follows the lives of children born at the stroke of midnight on August 15, 1947, the time of India's independence.",
  },
  {
    bookName: "Great Indian Novel",
    author: "Shashi Tharoor",
    imagePath: "./assests/Great-Indian-Novel.png",
    price: "$100",
    description:
      "The Great Indian Novel is a satirical novel that reimagines the Indian epic Mahabharata in the context of the Indian Independence Movement and its aftermath.",
  },
  {
    bookName: "No Name Lane",
    author: "Howard Linskey",
    imagePath: "./assests/no-name-lane-howard-linskey.jpg",
    price: "$450",
    description:
      "No Name Lane is a gripping crime thriller that follows a detective investigating a series of murders in a small British town, unraveling a complex web of secrets and lies.",
  },
  {
    bookName: "Raavan: Enemy of Aryavarta",
    author: "Amish Tripathi",
    imagePath: "./assests/Raavan-Enemy-of-Aryavarta-Amish-Tripathi.jpg",
    price: "$480",
    description:
      "Raavan: Enemy of Aryavarta is the third book in the Ram Chandra series, presenting an imaginative retelling of the ancient Indian epic Ramayana from the perspective of the antagonist, Raavan.",
  },
  {
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    imagePath: "./assests/the_catcher_in_the_rye.jpg",
    price: "$500",
    description:
      "The Catcher in the Rye is a classic coming-of-age novel that explores the themes of innocence, identity, and the struggles of adolescence, through the eyes of its teenage protagonist, Holden Caulfield.",
  },
  {
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    imagePath: "./assests/to-kill-a-mockingbird-graphic-novel-1.jpg",
    price: "$190",
    description:
      "To Kill a Mockingbird is a timeless American classic that addresses racial injustice and moral growth, seen through the perspective of a young girl, Scout Finch, in the racially charged 1930s Alabama.",
  },
  {
    bookName: "1984",
    author: "George Orwell",
    imagePath: "./assests/1984.jpg",
    price: "$250",
    description:
      "1984 is a dystopian novel that presents a chilling vision of a totalitarian future where individualism is crushed under the oppressive rule of the Party, led by the enigmatic figure Big Brother.",
  },
  // Add more records here if needed
];

// Display books and create cards, rows, and columns for each book
document.addEventListener("DOMContentLoaded", function () {
  const booksContainer = document.querySelector(".featured-books-section");
  let row;

  books.forEach((book, index) => {
    if (index % 3 === 0) {
      row = document.createElement("div");
      row.classList.add("row", "mb-5", "card-row");
      booksContainer.appendChild(row);
    }

    const card = document.createElement("div");
    card.classList.add("col-lg-3", "col-md-6", "mb-4");

    const innerCard = document.createElement("div");
    innerCard.classList.add("card");

    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.setAttribute("src", book.imagePath);
    image.setAttribute("alt", book.bookName);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = `Book Name: ${book.bookName}`;

    const description = document.createElement("p");
    description.classList.add("card-text", "text-justify");
    description.textContent = book.description;

    const author = document.createElement("h5");
    author.classList.add("card-title");
    author.textContent = `Author: ${book.author}`;

    const cardAmount = document.createElement("h5");
    cardAmount.classList.add("checkout-book-prize"); // Corrected the class name
    cardAmount.id = `cardAmount${index}`;
    cardAmount.textContent = `Amount: ${books[index].price}`;
    cardAmount.style.color = "green"; // Set the text color to green
    cardAmount.style.fontWeight = "bold"; // Make the text bold
    cardAmount.style.marginTop = "10px"; // Add top margin of 10 pixels

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const issueButton = document.createElement("button");
    issueButton.classList.add("btn", "btn-primary", "me-2");
    issueButton.textContent = "Issue Book";
    issueButton.setAttribute("data-book-name", book.bookName);
    issueButton.setAttribute("onclick", "issueBook()");

    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-danger");
    removeButton.textContent = "Remove Book";
    removeButton.setAttribute("data-book-name", book.bookName);
    removeButton.setAttribute("onclick", "removeBook()");

    cardBody.appendChild(title);
    cardBody.appendChild(author);
    cardBody.appendChild(description);
    cardBody.appendChild(cardAmount);
    cardFooter.appendChild(issueButton);
    cardFooter.appendChild(removeButton);

    innerCard.appendChild(image);
    innerCard.appendChild(cardBody);
    innerCard.appendChild(cardFooter);

    card.appendChild(innerCard);

    row.appendChild(card);
  });
});

// Function to search for books based on the input value
function searchBooks() {
  let searchTerm = document.getElementById("searchInput").value.toLowerCase(); // Retrieve the search input value in lowercase
  let cards = document.querySelectorAll(".card"); // Get all card elements

  // Check if there is a search term entered
  if (searchTerm.length) {
    // Iterate through each card
    cards.forEach(function (card) {
      let titleElement = card.querySelector(".card-title"); // Find the title element within the card
      if (titleElement) {
        let title = titleElement.innerText.toLowerCase(); // Retrieve the title text in lowercase
        if (title.includes(searchTerm)) {
          card.style.display = "block"; // Show the card if it matches the search term
        } else {
          card.style.display = "none"; // Hide the card if it doesn't match the search term
        }
      }
    });
  } else {
    // If the search term is empty, display all cards
    cards.forEach(function (card) {
      card.style.display = "block";
    });
  }
}

// Define the counter variable outside the issueBook function
let totalAmount = 0;
let counter = 0;

function issueBook() {
  const checkoutDetails = document.querySelector(".checkout-details");
  const bookCount = document.getElementById("book-count");
  const bookPrice = document.getElementById("total-Amount");
  const bookCards = document.querySelectorAll(".card");

  bookCards.forEach((book, index) => {
    book.removeEventListener("click", bookClickHandler);
    book.addEventListener("click", bookClickHandler);

    function bookClickHandler() {
      const existingCheckoutBook = document.querySelector(
        `#checkoutBookImage${index}`
      );
      if (existingCheckoutBook) {
        checkoutDetails.removeChild(existingCheckoutBook.parentElement);
      }

      const checkoutBook = document.createElement("div");
      checkoutBook.setAttribute("class", "checkout-book col-lg-4");
      const checkoutBookImage = document.createElement("img");
      checkoutBookImage.setAttribute("class", "checkout-book-image");
      checkoutBookImage.setAttribute("id", `checkoutBookImage${index}`);
      checkoutBookImage.src = books[index].imagePath;

      const checkoutBookInfo = document.createElement("div");
      checkoutBookInfo.classList.add("checkout-book-info");

      const checkoutBookTitle = document.createElement("h2");
      checkoutBookTitle.classList.add("checkout-book-title");
      checkoutBookTitle.id = `checkoutBookTitle${index}`;
      checkoutBookTitle.textContent = `Title: ${books[index].bookName}`;

      const checkoutBookAuthor = document.createElement("p");
      checkoutBookAuthor.classList.add("checkout-book-author");
      checkoutBookAuthor.id = `checkoutBookAuthor${index}`;
      checkoutBookAuthor.textContent = `Author: ${books[index].author}`;

      const checkoutBookDescription = document.createElement("p");
      checkoutBookDescription.classList.add("checkout-book-description");
      checkoutBookDescription.id = `checkoutBookDescription${index}`;
      checkoutBookDescription.textContent = `Description: ${books[index].description}`;

      checkoutBookInfo.appendChild(checkoutBookTitle);
      checkoutBookInfo.appendChild(checkoutBookAuthor);
      checkoutBookInfo.appendChild(checkoutBookDescription);

      checkoutBook.appendChild(checkoutBookImage);
      checkoutBook.appendChild(checkoutBookInfo);

      checkoutDetails.appendChild(checkoutBook);

      let price = 0;
      price = parseInt(books[index].price.replace("$", ""));
      totalAmount += price;
      bookPrice.textContent = `Total Amount : $${totalAmount}`;
    }
  });
  counter += 1;
  bookCount.textContent = `Books Added: ${counter}`;
}

// Function to handle removing a book
function removeBook() {
  const checkoutDetails = document.querySelector(".checkout-details");

  const bookCards = document.querySelectorAll(".card");

  bookCards.forEach((book, index) => {
    book.removeEventListener("click", bookClickHandler);
    book.addEventListener("click", bookClickHandler);

    function bookClickHandler() {
      const existingCheckoutBook = document.querySelector(
        `#checkoutBookImage${index}`
      );
      if (existingCheckoutBook) {
        checkoutDetails.removeChild(existingCheckoutBook.parentElement);
      }

      checkoutDetails.removeChild(checkoutBook);
    }
  });
}
