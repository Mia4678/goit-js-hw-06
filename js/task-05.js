const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (textInput.value === "") {
    output.textContent = "Anonymus";
  } else {
    output.textContent = event.currentTarget.value;
  }
});
