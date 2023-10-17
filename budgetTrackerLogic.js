// Initialize variables for tracking data
let totalAmount = 0; // To store the total amount
let expenses = 0; // To store the total expenses
let budgetGoal = 2000; // Initial budget goal
const transactionList = []; // To store transaction history

// Function to add a new transaction
function addTransaction() {
  // Retrieve input values
  let description = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("myDropdown").value;

  // Retrieve DOM elements for displaying data
  const totalDisplay = document.getElementById("total");
  const expensesDisplay = document.getElementById("expenses");
  const budgetGoalDisplay = document.getElementById("budget-goal");
  const transactionListDisplay = document.getElementById("transaction-list");

  // Check if description and amount are provided
  if (description && amount) {
    // Create a transaction object and add it to the list
    const transaction = {
      description: description,
      amount: amount,
      category: category,
    };
    transactionList.push(transaction);

    // Update total amount and display it
    totalAmount += amount;
    totalDisplay.textContent = `Total: $${totalAmount}`;

    // Update budget goal or expenses based on the current budget status
    if (expenses <= budgetGoal && budgetGoal > 0) {
      budgetGoal -= amount;
      budgetGoalDisplay.textContent = `Budget Goal: $${budgetGoal}`;
    } else {
      expenses += amount;
      expensesDisplay.textContent = `Expenses: $${expenses}`;
    }

    // Create table rows for transaction history
    const tableRow = document.createElement("tr");
    const tableCategory = document.createElement("td");
    const tableDataDescription = document.createElement("td");
    const tableDataAmount = document.createElement("td");

    // Populate table data with transaction details
    tableDataDescription.textContent = description;
    tableCategory.textContent = category;
    tableDataAmount.textContent = `$${amount}`;

    // Append table data to the table row
    tableRow.appendChild(tableCategory);
    tableRow.appendChild(tableDataDescription);
    tableRow.appendChild(tableDataAmount);

    // Append the new row to the transaction list display
    transactionListDisplay.appendChild(tableRow);

    // Reset input fields after adding transaction
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("myDropdown").value = "Food and Dining";
  } else {
    // Display an alert if both description and amount are not provided
    alert("Please enter both description and amount.");
  }
}
