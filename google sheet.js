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
