// console.log(test(5, 2));

function burgerMenu() {
    let burgerIcon = document.querySelector(".icon-menu");
    let closeIcon = document.getElementById("close_icon");
    let burgerMenu = document.getElementById("burger__menu");

    burgerIcon.addEventListener("click", function() {
        burgerMenu.classList.toggle("_active")
        // .icon-menu.
    })
}

burgerMenu()
