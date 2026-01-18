document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const message = document.createElement("p");
    message.textContent =
      "Thank you for contacting ClearPath Property Services. We will get back to you shortly.";
    message.style.marginTop = "16px";
    message.style.color = "#2a7a5e";

    form.appendChild(message);
    form.reset();
  });
});
