function multiply(x, y, callback) {
  let result = x * y;
  callback(null, result);
}

function divide(x, y, callback) {
  if (y === 0) {
    callback(new Error("Division by zero error"), null);
  } else {
    let result = x / y;
    callback(null, result);
  }
}

multiply(5, 3, (error, result) => {
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Multiplication result:", result);
  }
});

divide(10, 2, (error, result) => {
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Division result:", result);
  }
});
