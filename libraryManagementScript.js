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

document.addEventListener("DOMContentLoaded", function () {
  const booksContainer = document.querySelector(".featured-books-section");
  let row;

  books.forEach((book, index) => {
    if (index % 3 === 0) {
      // Create a new row for every third card
      row = document.createElement("div");
      row.classList.add("row");
      booksContainer.appendChild(row);
    }

    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "mb-4");

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
    issueButton.classList.add("btn", "btn-primary");
    issueButton.textContent = "Issue Book";
    issueButton.setAttribute("data-book-name", book.bookName);
    issueButton.setAttribute("onclick", "issueBook(this)");

    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-danger");
    removeButton.textContent = "Remove Book";
    removeButton.setAttribute("data-book-name", book.bookName);
    removeButton.setAttribute("onclick", "removeBook(this)");

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

function issueBook(button) {
  let bookName = button.getAttribute("data-book-name");
  console.log(bookName);

  // Simulating an asynchronous process with a setTimeout function
  setTimeout(function () {
    // Simulating the book issuing process
    console.log(`The book "${bookName}" has been issued.`);
    // Perform necessary actions to indicate that the book has been issued

    // For example, disable the button to indicate that the book has been issued
    button.disabled = true;
  }, 1000); // Simulating a 1-second delay before the book is issued
}

function removeBook(button) {
  let bookName = button.getAttribute("data-book-name");
  console.log(bookName);

  // Assuming you want to simulate an asynchronous process, using setTimeout here
  setTimeout(function () {
    // Simulate removing the book by updating the UI or sending a request to the server
    console.log(`The book "${bookName}" has been removed.`);
    // Update the UI or make a server request here

    // For example, you can enable the "Issue Book" button to indicate that the book has been removed
    let issueButton = document.querySelector(
      `button[data-book-name="${bookName}"][class="btn btn-primary"]`
    );
    if (issueButton) {
      issueButton.disabled = false;
    }
  }, 1000); // Simulating a 1-second delay before the book is removed
}
