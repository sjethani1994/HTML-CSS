function superAddition(a, b) {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum = sum + a + b;
  }
  console.log(sum);
}

function modifyText() {
  const h1Element = document.getElementById("h1_tag");
  const currentValue = h1Element.innerHTML;

  const body = document.body;
  if (currentValue === "Sumit") {
    h1Element.innerHTML = "Gopal";
    h1Element.style.color = "white";
    body.style.backgroundColor = "black";
  } else {
    h1Element.innerHTML = "Sumit";
    h1Element.style.color = "black";
    body.style.backgroundColor = "white";
  }
}
