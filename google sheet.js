const scriptURL =
  "https://script.google.com/macros/s/AKfycbzPpUW0X5iJNQebenf0618zl3V4LHLAnuBd-NlgsbPkWcD6RRM96e03zCAHN10P89SH/exec";

const form = document.forms["S-band form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

// Get the dropdown and input element by their IDs
var operationTypeDropdown = document.getElementById("inputState");
var dataBreakInput = document.getElementById("dataBreakInput");

// Add an onchange event listener to the dropdown
operationTypeDropdown.addEventListener("change", function () {
  // Check if the selected option is 'Full PL_PB_1Mbps' or 'Partial FHK_PB'
  if (
    operationTypeDropdown.value === "Full PL_PB_1Mbps" ||
    operationTypeDropdown.value === "Partial FHK_PB"
  ) {
    // If the selected option is one of the specified options, disable the input field
    dataBreakInput.disabled = true;
  } else {
    // If the selected option is not one of the specified options, enable the input field
    dataBreakInput.disabled = false;
  }
});
