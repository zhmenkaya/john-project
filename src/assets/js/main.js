// console.log(test(5, 2));

function toggleBurgerMenu() {
    let burgerIcon = document.querySelector(".icon-menu");
    let closeIcon = document.getElementById("close_icon");
    let burgerMenu = document.getElementById("burger__menu");

    burgerIcon.addEventListener("click", function () {
        burgerMenu.classList.toggle("_active")
    })

    closeIcon.addEventListener("click",function () {
        burgerMenu.classList.toggle("_active")
    })
}



toggleBurgerMenu()
