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

// Template function for generating ratings HTML
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
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
            <ul class="recipe__ingredients">
                ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <ol class="recipe__instructions">
                ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
            <p class="recipe__yield">Yield: ${recipe.recipeYield}</p>
            <p class="recipe__author">By: ${recipe.author}</p>
        </figcaption>
    </figure>`;
}

// Function to render recipes on the page
function renderRecipes(recipeList) {
    const outputElement = document.querySelector('#recipe');
    outputElement.innerHTML = recipeList.map(recipeTemplate).join('');
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

// Search handler function
function searchHandler(event) {
    event.preventDefault();
    const query = document.querySelector('#find-a-recipe-input').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

// Event listener for search button
document.querySelector('#search-icon-container').addEventListener('click', searchHandler);

// Initialize the page with a random recipe
init();



