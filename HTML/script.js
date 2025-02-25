document.addEventListener("DOMContentLoaded", function() {
    const eventsContainer = document.getElementById("events-container");

    fetch("https://api.example.com/events")  // Replace with actual API
        .then(response => response.json())
        .then(data => {
            data.events.forEach(event => {
                const eventCard = document.createElement("div");
                eventCard.classList.add("event-card");

                eventCard.innerHTML = `
                    <h2>${event.name}</h2>
                    <p>${event.date}</p>
                    <p>${event.description}</p>
                `;

                eventsContainer.appendChild(eventCard);
            });
        })
        .catch(error => console.error("Error fetching events:", error));
});