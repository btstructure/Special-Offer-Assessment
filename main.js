document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let handle = document.getElementById("handle").value;

  // Email validation regex pattern
  // let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // if (!emailRegex.test(email)) {
  //   alert("Please enter a valid email address.");
  //   return;
  // }

  // let storedData = JSON.parse(localStorage.getItem(email));

  // if (storedData) {
  //   alert("Email already taken. Please use a different email.");
  //   return;
  // }

  let formData = {
    name: name,
    email: email,
    handle: handle,
  };

  // localStorage.setItem(email, JSON.stringify(formData))

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
