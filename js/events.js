  
;(() => {
  "use strict"



const blogContent = document.querySelector(".blog-content-wrap");
const EVENTS_URL = "data/events.json";
/**
 * Fetch events.json and return array of event objects.
 * @returns {Promise<Array>} events
 */
async function fetchEvents() {
  try {
    const response = await fetch(EVENTS_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const json = await response.json();
    return json.events || [];
  } catch (err) {
    console.error("Failed to load events:", err);
    return [];
  }
}
/**
 * Create a card element for a single event and append it to the page.
 * @param {Object} ev event data
 */


function createCard(ev) {
  console.log(ev.id);
  const card = document.createElement("div");
  card.className = "col-lg-4";
  card.innerHTML = `
    <div class="blog-content">
      <div class="blog-item blog-item1">
        <div class="blog-img">
          <a href="events-detail.html?slug=${ev.slug}">
            <img src="${ev.heroImage || ""}" alt="${ev.title}" />
          </a>
          <span class="blog__tag blog__tag1">
            <span class="date__num-text">${ev.date.day}</span>
            <span class="date__mon-text">${ev.date.month}</span>
          </span>
        </div>
        <div class="blog-inner-content">
          <h3 class="blog__title">
            <a href="events-detail.html?slug=${ev.slug}">${ev.title}</a>
          </h3>
          <ul class="blog__list">
            <li class="blog__dot-active">${ev.date.day} ${ev.date.month} ${ev.date.year}</li>
            <li>${ev.location && ev.location.address ? ev.location.address.split(",")[0] : ""}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  blogContent.appendChild(card);
}



/**
 * Sort an array of events by date (descending - closest dates first).
 * @param {Array} events
 */
function sortCards(events) {
  const monthMap = {
    "Ocak": 1, "Şubat": 2, "Mart": 3, "Nisan": 4,
    "Mayıs": 5, "Haziran": 6, "Temmuz": 7, "Ağustos": 8,
    "Eylül": 9, "Ekim": 10, "Kasım": 11, "Aralık": 12
  };

  return events.slice().sort((a, b) => {
    const yearA = parseInt(a.date.year);
    const yearB = parseInt(b.date.year);
    if (yearA !== yearB) return yearB - yearA;

    const monthA = monthMap[a.date.month] || 0;
    const monthB = monthMap[b.date.month] || 0;
    if (monthA !== monthB) return monthB - monthA;

    const dayA = parseInt(a.date.day);
    const dayB = parseInt(b.date.day);
    return dayB - dayA;
  });
}

// initialize when DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  const events = await fetchEvents();
  if (events.length) {
    const sorted = sortCards(events);
    sorted.forEach(createCard);
  }
});
})();