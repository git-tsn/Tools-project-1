// main.js

const defaultColor = "#F9F6E6";
const bookedColor = "#22c55e";

window.bookRoom = function () {
  const roomNumber = document.getElementById("book-input").value.trim();
  const roomDiv = document.querySelector(`[data-room="${roomNumber}"]`);
  if (roomDiv) {
    roomDiv.style.backgroundColor = bookedColor;

    // You can also add Tailwind classes dynamically
    roomDiv.classList.add("text-white", "shadow-lg");
  } else {
    alert("Room not found!");
  }
};

window.checkoutRoom = function () {
  const roomNumber = document.getElementById("checkout-input").value.trim();
  const roomDiv = document.querySelector(`[data-room="${roomNumber}"]`);
  if (roomDiv) {
    roomDiv.style.backgroundColor = defaultColor;
    roomDiv.classList.remove("text-white", "shadow-lg");
  } else {
    alert("Room not found!");
  }
};
