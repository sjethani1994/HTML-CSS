// Function to handle keyup event, avoiding triggering on space key
function handleKeyUp(e) {
  // Check if the key pressed is not a space key
  if (e.key !== " " && e.key !== "Spacebar") {
    searchBooks(); // Call the searchBooks function
  }
}

const books = [
  {
    bookName: "Godan Munshi Premchand",
    author: "J Rantan and P.Lal",
    imagePath: "./assests/Godan-Munshi-Premchand.jpg",
  },
  {
    bookName: "HangWomen",
    author: "K.R. Meera",
    imagePath: "./assests/book-2.jpeg",
  },
  {
    bookName: "Midnight children",
    author: "Salman Rushdie",
    imagePath: "./assests/Midnight-children.jpg",
  },
  {
    bookName: "Great Indian Novel",
    author: "Shashi Tharoor",
    imagePath: "./assests/Great-Indian-Novel.png",
  },
  {
    bookName: "No Name Lane",
    author: "Howard Linskey",
    imagePath: "./assests/no-name-lane-howard-linskey.jpg",
  },
  {
    bookName: "Raavan: Enemy of Aryavarta",
    author: "Amish Tripathi",
    imagePath: "./assests/Raavan-Enemy-of-Aryavarta-Amish-Tripathi.jpg",
  },
  {
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    imagePath: "./assests/the_catcher_in_the_rye.jpg",
  },
  {
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    imagePath: "./assests/to-kill-a-mockingbird-graphic-novel-1.jpg",
  },
  {
    bookName: "1984",
    author: "George Orwell",
    imagePath: "./assests/1984.jpg",
  },
];

// display books and creating cards, rows, column for each book
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

function issueBook() {
  const bookCards = document.querySelectorAll(".card");
  const checkoutBookImage = document.getElementById("checkoutBookImage");
  const checkoutBookTitle = document.getElementById("checkoutBookTitle");
  const checkoutBookAuthor = document.getElementById("checkoutBookAuthor");

  bookCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      checkoutBookImage.src = books[index].imagePath;
      checkoutBookTitle.textContent = `Book Name: ${books[index].bookName}`;
      checkoutBookAuthor.textContent = `Author: ${books[index].author}`;
    });
  });
}

function removeBook() {
  const bookCards = document.querySelectorAll(".card");
  const checkoutBookImage = document.getElementById("checkoutBookImage");
  const checkoutBookTitle = document.getElementById("checkoutBookTitle");
  const checkoutBookAuthor = document.getElementById("checkoutBookAuthor");

  bookCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      checkoutBookImage.src = "";
      checkoutBookTitle.textContent = ``;
      checkoutBookAuthor.textContent = ``;
    });
  });
}
