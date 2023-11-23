var navBar = document.getElementById("navBar");

function toggleBtn() {
    navBar.classList.toggle("hidemenu")
}
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
