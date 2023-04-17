var veggieBurger = document.querySelector(".hamburger")
veggieBurger.addEventListener("click", onBurgerClicked)

function onBurgerClicked(){
     veggieBurger.classList.toggle("is-active")

     var mobile_menu = document.querySelector(".mobile");
     mobile_menu.classList.toggle("show-mobile");
}