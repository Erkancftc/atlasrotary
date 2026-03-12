// ;<div class="col-lg-4">
//   <div class="blog-content">
//     <div class="blog-item blog-item1">
//       <div class="blog-img">
//         <a href="">
//           <img src="images/duyu-butunleme/04.jpg" alt="duyu bütünleme" />
//         </a>
//         <span class="blog__tag blog__tag1">
//           <span class="date__num-text">3</span>
//           <span class="date__mon-text">Aralık</span>
//         </span>
//       </div>
//       <div class="blog-inner-content">
//         <h3 class="blog__title">
//           <a href="events-detail.html?slug=duyu-butunleme-merkezi-acilisi">Duyu Bütünleme</a>
//         </h3>
//         <ul class="blog__list">
//           <li class="blog__dot-active">03 Aralık 2025</li>
//           <li>Ataşehir</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>
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
 * Sort an array of events by date (ascending).
 * @param {Array} events
 */
function sortCards(events) {
  return events.slice().sort((a, b) => {
    const da = new Date(`${a.date.month} ${a.date.day}, ${a.date.year}`);
    const db = new Date(`${b.date.month} ${b.date.day}, ${b.date.year}`);
    return da - db;
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
})