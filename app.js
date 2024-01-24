const inputField = document.querySelector("form input"),
  btnCheck = document.querySelector("form button"),
  outputEl = document.querySelector(".output");

let filterInput;

btnCheck.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  console.log(reverseInput, filterInput);
  outputEl.style.display = "flex";
  if (reverseInput == filterInput) {
    return (outputEl.innerHTML = `Yes, <span>${inputField.value}</span> Is A Palindrome!`);
  }

  outputEl.innerHTML = `No, <span>${inputField.value}</span> Is Not A Palindrome!`;
});

inputField.addEventListener("keyup", (e) => {
  e.preventDefault();

  filterInput = inputField.value.toLowerCase().replace(/[^0-9a-z]/gi, "");
  if (filterInput) {
    return btnCheck.classList.add("active");
  }

  outputEl.style.display = "none";
  btnCheck.classList.remove("active");
});
