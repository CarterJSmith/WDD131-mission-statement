// We set themeSwitch to the selector element.
const themeSwitch = document.getElementById("theme");

// listens for a change on the selector 
themeSwitch.addEventListener("change", changeTheme);

// this changes the theme 
function changeTheme() {
    const body = document.body; 
    const logo = document.getElementById("logo-footer"); 

    if (themeSwitch.value === "Dark") {
        body.classList.add("dark");
        logo.src = "Imgs/byui-logo_white.png"; 
    } else {
        body.classList.remove("dark");
        logo.src = "Imgs/byui-logo_blue.webp"; 
    }
}


