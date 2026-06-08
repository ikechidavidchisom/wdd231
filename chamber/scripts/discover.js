import { places } from "../data/discover.mjs";

const container = document.getElementById("discover");
const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalAddress = document.getElementById("modalAddress");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

// Build cards dynamically
places.forEach((place, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button class="learn-more">Learn More</button>
  `;

  // Add event listener for modal
  card.querySelector(".learn-more").addEventListener("click", () => {
    modalTitle.textContent = place.name;
    modalImage.src = place.image;
    modalImage.alt = place.name;
    modalAddress.textContent = place.address;
    modalDescription.textContent = place.description;
    modal.showModal();
  });

  container.appendChild(card);
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.close();
});

// Visitor message logic
const messageArea = document.getElementById("visitor-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageArea.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    messageArea.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    messageArea.textContent = "You last visited 1 day ago.";
  } else {
    messageArea.textContent = `You last visited ${days} days ago.`;
  }
}
localStorage.setItem("lastVisit", now);
