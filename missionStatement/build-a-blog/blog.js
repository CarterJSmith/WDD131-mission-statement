const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]


// Get reference to the main content area
const mainContent = document.querySelector('.main-page');

if (!mainContent) {
    console.error("The main content element was not found!");
} else {
    console.log("Main content element found:", mainContent);
}

// Function to generate articles
function displayArticles() {
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article'); // You can add styles later

        // Create a template literal for the article's HTML
        articleElement.innerHTML = `
            <div class="left-panel">
                <p class="date">${article.date}</p>
                <p class="ages">${article.ages}</p>
                <p class="genre">${article.genre}</p>
                <p class="stars">${article.stars}</p>
            </div>
            <div class="main-content">
                <h2 class="book-title">${article.title}</h2>
                <div class="book-img">
                    <img src="${article.imgSrc}" alt="${article.imgAlt}">
                </div>
                <p class="Description">${article.description}</p>
            </div>
        `;

        // Append the new article to the main content
        mainContent.appendChild(articleElement);
    });
}

// Call the function to display articles
if (mainContent) {
    displayArticles();
}

