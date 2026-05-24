// Fetch and display spotlight members from JSON
async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json"); 
    const data = await response.json();

    // Filter gold & silver members
    const eligible = data.members.filter(m =>
      m.membership === "Gold" || m.membership === "Silver"
    );

    // Randomize and select 2–3
    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 3);

    // Display cards
    const container = document.querySelector("#spotlights");
    container.innerHTML = ""; // clear old content

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <img src="images/${member.logo}" alt="${member.name} logo">
        <p>Membership: ${member.membership}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Spotlights fetch error:", error);
    document.querySelector("#spotlights").innerHTML = "<p>Unable to load spotlights.</p>";
  }
}

loadSpotlights();
