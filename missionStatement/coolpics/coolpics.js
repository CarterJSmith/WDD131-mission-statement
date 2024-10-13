const menuButton = document.querySelector(".basic-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);


function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}
  
handleResize();
window.addEventListener("resize", handleResize);

function viewHandler(event) {
    // Get the element that was clicked
    const clickedElement = event.target;

    // Check if the clicked element is an image
    if (clickedElement.tagName === 'IMG') {
        // Get the src attribute of the clicked image and split it on the "-"
        const imageSrc = clickedElement.src.split("-")[0];

        // Construct the new image file name
        const newImageSrc = `${imageSrc}-full.jpeg`; // Append '-full.jpeg'

        // Insert the viewerTemplate into the body
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImageSrc, clickedElement.alt));

        // Add a listener to the close button (X)
        const closeButton = document.querySelector(".close-viewer");
        closeButton.addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.remove(); // This removes the viewer from the DOM
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

