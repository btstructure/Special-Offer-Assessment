document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let handle = document.getElementById("handle").value;

  let formData = {
    name: name,
    email: email,
    handle: handle,
  };

  // Hide the form, submit button, h1, h2, background-image, and p
  let container = document.querySelector(".container");
  container.style.backgroundImage = "none";
  let form = document.getElementById("form");
  form.style.display = "none";
  let h1 = document.querySelector("h1");
  h1.style.display = "none";
  let h2Elements = document.querySelectorAll("h2");
  h2Elements.forEach(function (h2) {
    h2.style.display = "none";
  });
  let p = document.querySelector("p");
  p.style.display = "none";

  // Create and display the hello message,background color changes
  let message = document.createElement("p");
  container.style.backgroundColor = "#CC66FF";
  message.textContent = `Hello, ${name}, you are now subscribed to receive emails from SPECIAL OFFER!`;
  message.style.color = "white";
  message.style.fontWeight = "bold";
  message.style.fontSize = "18px";
  message.style.textAlign = "center";

  document.querySelector(".main-content").appendChild(message);
});
