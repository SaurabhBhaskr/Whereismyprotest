
const searchInput = document.getElementById("searchInput");

const locationFilter = document.getElementById("locationFilter");

const categoryFilter = document.getElementById("categoryFilter");

const statusFilter = document.getElementById("statusFilter");

const eventCards = document.querySelectorAll(".event-card");

const noResults = document.getElementById("noResults");


function filterProtests() {

    const searchText = searchInput.value.toLowerCase().trim();

    const selectedLocation = locationFilter.value;

    const selectedCategory = categoryFilter.value;

    const selectedStatus = statusFilter.value;

    let visibleCount = 0;

    eventCards.forEach(function(card) {

        const cardText = card.innerText.toLowerCase();

        const cardLocation = card.dataset.location;

        const cardCategory = card.dataset.category;

        const cardStatus = card.dataset.status;


        const matchesSearch = cardText.includes(searchText);

        const matchesLocation =
            !selectedLocation ||
            cardLocation === selectedLocation;

        const matchesCategory =
            !selectedCategory ||
            cardCategory === selectedCategory;

        const matchesStatus =
            !selectedStatus ||
            cardStatus === selectedStatus;


        if (
            matchesSearch &&
            matchesLocation &&
            matchesCategory &&
            matchesStatus
        ) {

            card.style.display = "flex";
            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    noResults.hidden = visibleCount !== 0;
}


// Listen for user interactions

searchInput.addEventListener("input", filterProtests);

locationFilter.addEventListener("change", filterProtests);

categoryFilter.addEventListener("change", filterProtests);

statusFilter.addEventListener("change", filterProtests);
