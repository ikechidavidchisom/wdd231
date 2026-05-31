// thankyou.js

// Get query parameters from URL
const params = new URLSearchParams(window.location.search);

// Populate fields with submitted values
document.getElementById("firstName").textContent = params.get("firstName") || "Not provided";
document.getElementById("lastName").textContent = params.get("lastName") || "Not provided";
document.getElementById("email").textContent = params.get("email") || "Not provided";
document.getElementById("phone").textContent = params.get("phone") || "Not provided";
document.getElementById("organization").textContent = params.get("organization") || "Not provided";
document.getElementById("timestamp").textContent = params.get("timestamp") || new Date().toLocaleString();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();