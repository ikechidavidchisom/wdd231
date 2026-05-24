// Load members from JSON
async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

function displayMembers(members) {
  const container = document.getElementById("members");
  container.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="images/${member.logo}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${member.membership}</p>
    `;
    container.appendChild(card);
  });
}

// Toggle views
document.getElementById("gridBtn").addEventListener("click", () => {
  document.getElementById("members").className = "grid-view";
});
document.getElementById("listBtn").addEventListener("click", () => {
  document.getElementById("members").className = "list-view";
});

// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initialize
loadMembers();
