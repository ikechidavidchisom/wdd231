// scripts/events.js

async function fetchEvents() {
  const eventsUrl = "data/events.json"; // Path to the JSON file

  try {
    const response = await fetch(eventsUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const events = await response.json();

    // Render sections
    displayFeaturedEvent(events);
    displayEventGrid(events);
    displayTimeline(events);

  } catch (error) {
    console.error("Error fetching events:", error);

    // Show error messages in each section
    const featured = document.getElementById("featured-event");
    const grid = document.getElementById("event-grid");
    const timeline = document.getElementById("timeline");

    if (featured) featured.innerHTML = `<p class="error">Unable to load featured event.</p>`;
    if (grid) grid.innerHTML = `<p class="error">Unable to load events.</p>`;
    if (timeline) timeline.innerHTML = `<p class="error">Unable to load timeline.</p>`;
  }
}

function displayFeaturedEvent(events) {
  const featuredContainer = document.getElementById("featured-event");
  if (!featuredContainer) return;

  const featuredEvent = events.find(event => event.featured === true);

  if (featuredEvent) {
    featuredContainer.innerHTML = `
      <span class="event-badge">Featured Event</span>
      <h2>${featuredEvent.title}</h2>
      <p>${featuredEvent.description}</p>
      <ul>
        <li>Date: ${featuredEvent.date}</li>
        <li>Venue: Aba Tech Innovation Hub</li>
        <li>Time: 9:00 AM</li>
      </ul>
      <a href="join.html" class="btn-primary">Register Now</a>
    `;
  } else {
    featuredContainer.innerHTML = `<p>No featured event available.</p>`;
  }
}

function displayEventGrid(events) {
  const gridContainer = document.getElementById("event-grid");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  events.forEach(event => {
    // Skipping featured event in grid
    if (event.featured) return;

    const article = document.createElement("article");
    article.classList.add("event-card");

    article.innerHTML = `
      <i class="${event.icon}"></i>
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <p><strong>${event.date}</strong></p>
    `;

    gridContainer.appendChild(article);
  });
}

function displayTimeline(events) {
  const timelineContainer = document.getElementById("timeline");
  if (!timelineContainer) return;

  timelineContainer.innerHTML = "";

  events.forEach(event => {
    const item = document.createElement("div");
    item.classList.add("timeline-item");

    item.innerHTML = `
      <h3>${event.date}</h3>
      <p>${event.title}</p>
    `;

    timelineContainer.appendChild(item);
  });
}

// Run fetchEvents when DOM is ready
document.addEventListener("DOMContentLoaded", fetchEvents);
