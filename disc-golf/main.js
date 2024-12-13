import { discs } from './discs.js';

document.addEventListener("DOMContentLoaded", () => {
    const filterDropdown = document.getElementById("filter");
    const shopContainer = document.getElementById("shop-container");

    // Populate the shop dynamically based on the discs array
    function displayDiscs(filteredDiscs) {
        shopContainer.innerHTML = ""; // Clear existing content
        const grouped = groupBy(filteredDiscs, "type");

        Object.keys(grouped).forEach(type => {
            const section = document.createElement("section");
            section.innerHTML = `
                <h1>${type}</h1>
                <div class="shop-holders">
                    ${grouped[type]
                        .map(disc => `
                            <div class="disc-card">
                                <h2 class="shop-title">${disc.name}</h2>
                                <a class="shop-img-link" href="#">
                                    <img class="shop-img" src="${disc.image}" alt="${disc.name}">
                                </a>
                            </div>
                        `)
                        .join("")}
                </div>
            `;
            shopContainer.appendChild(section);
        });

        //Add click listeners for popups
        const discCards = document.querySelectorAll(".disc-card");
        discCards.forEach(card => {
            const discName = card.querySelector(".shop-title").textContent;
            const disc = discs.find(d => d.name === discName);
            card.querySelector(".shop-img").addEventListener("click", () => {
                showPopup(disc);
            });
        });
    }

    // Group discs by type, help from AI for this function
    function groupBy(array, key) {
        return array.reduce((result, item) => {
            (result[item[key]] = result[item[key]] || []).push(item);
            return result;
        }, {});
    }

    //Show popup
    function showPopup(disc) {
        const popup = document.createElement("div");
        popup.classList.add("popup");

        const { name, stats } = disc;
        popup.innerHTML = `
            <div class="popup-content">
                <h2>${name} Stats</h2>
                <p>Speed: ${stats.Speed}</p>
                <p>Glide: ${stats.Glide}</p>
                <p>Turn: ${stats.Turn}</p>
                <p>Fade: ${stats.Fade}</p>
                <button class="close-popup">Close</button>
            </div>
        `;

        document.body.appendChild(popup);

        //close button
        document.querySelector(".close-popup").addEventListener("click", () => {
            document.body.removeChild(popup);
        });
    }

    
    displayDiscs(discs);

    // Filter discs on dropdown change
    filterDropdown.addEventListener("change", event => {
        const type = event.target.value;
        const filtered = type === "all" ? discs : discs.filter(disc => disc.type === type);
        displayDiscs(filtered);
    });
});
