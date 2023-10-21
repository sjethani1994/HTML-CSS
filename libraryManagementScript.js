// Function to handle keyup event, avoiding triggering on space key
function handleKeyUp(e) {
  // Check if the key pressed is not a space key
  if (e.key !== " " && e.key !== "Spacebar") {
    searchBooks(); // Call the searchBooks function
  }
}

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
