function toggleFunction(){
    let navItem = document.querySelector(".menu_items")
    let toggleBtn = document.querySelector(".toggle-btn")
    navItem.classList.toggle("show_menu")
    toggleBtn.classList.toggle("animation")
}



let preloader = document.getElementById("pre_loader");
function loadingFunction() {
  preloader.style.display = "none";
}