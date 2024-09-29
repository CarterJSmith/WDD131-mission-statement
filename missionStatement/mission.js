const themeSwitch = document.getElementById("theme");

themeSwitch.addEventListener("change", changeTheme);

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


