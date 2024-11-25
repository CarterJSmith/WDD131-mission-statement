import recipes from './recipes.mjs';

// Function to generate a random number
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Function to get a random recipe
function getRandomRecipe() {
    const randomIndex = getRandomNumber(recipes.length);
    return recipes[randomIndex];
}

// Template function for generating tags HTML
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

//function for generating ratings HTML
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? `<span aria-hidden="true" class="icon-star">⭐</span>` 
                            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

// Template function for generating recipe HTML
function recipeTemplate(recipe) {
    return `
        
            <div>
                <img id="recipe-image" src="${recipe.image}" alt="picture of ${recipe.name}">
            </div>
            <div>
                <button id="button">${recipe.tags[0]}</button>
                <p id="title">${recipe.name}</p>
                <span
                    class="rating"
                    role="img"
                    aria-label="Rating: ${recipe.rating} out of 5 stars"
                >
                    ${ratingTemplate(recipe.rating)}
                </span>
                <p id="description">${recipe.description}</p>
            </div>
        `;
}


// Function to render recipes on the page
function renderRecipes(recipeList) {
    const outputElement = document.querySelector('#recipe'); 
    outputElement.innerHTML = recipeList.map(recipeTemplate).join(''); // Keeps the structure aligned with existing CSS
}

// Initialization function to display a random recipe on page load
function init() {
    const recipe = getRandomRecipe();
    renderRecipes([recipe]);
}

// Function to filter recipes based on search query
function filterRecipes(query) {
    return recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query))
    ).sort((a, b) => a.name.localeCompare(b.name));
}


function searchHandler(event) {
    event.preventDefault();
    const query = document.querySelector('#find-a-recipe-input').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}


document.querySelector('#find-a-recipe-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchHandler(event); 
    }
});


document.querySelector('#search-icon-container').addEventListener('click', searchHandler);


init();


// const recipe = getRandomListEntry(recipes);
// console.log(recipeTemplate(recipe));
