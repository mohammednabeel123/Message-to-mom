const helloWorld = document.getElementById("Hello-world");
const moonLight = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const messageMom = document.getElementById("message-mom");
let mom = "Hadishetu";

helloWorld.addEventListener("click", function (e) {
  input = prompt("Enter your name");

  // Ensure input is not empty or only whitespace
  if (input !== mom) {
    return; // Exit if input is invalid
  }

  helloWorld.innerText = `Hello, Good Morning ,Mom!`;

  document.body.style.backgroundColor = " deepskyblue";
  moonLight.style.display = "none";
  sunIcon.style.display = "block";
  messageMom.style.display = "Block";
});

sunIcon.addEventListener("click", function () {
  // Set background to dark mode and switch to sun icon
  document.body.style.backgroundColor = " #2c3e50";
  moonLight.style.display = "block";
  sunIcon.style.display = "none";
  messageMom.style.display = "none";
  helloWorld.innerText = "Enter your name"; // Reset button text
});
