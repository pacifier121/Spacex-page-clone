var nav = document.querySelector("#nav");
var previousScrollY = window.scrollY;
document.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
        if (previousScrollY > window.scrollY) {
            nav.classList.add("nav-on-scroll");
            nav.classList.add("nav-bg-black");
            nav.classList.remove("nav-on-scroll-close");
        }
        else {
            nav.classList.add("nav-bg-black");
            nav.classList.remove("nav-on-scroll");
            nav.classList.add("nav-on-scroll-close");
        }
    }
    else {
        nav.classList.remove("nav-bg-black");
    }
    previousScrollY = window.scrollY;
    //   Closing sidepanels
    sideBar.classList.remove("sidebar-active");
    hamburgerBtn.classList.remove("hamburger-btn-active");
});
var hamburgerBtn = document.querySelector('#sidebar-btn');
var sideBar = document.querySelector('#sidebar');
hamburgerBtn.addEventListener("click", function (e) {
    hamburgerBtn.classList.toggle("hamburger-btn-active");
    sideBar.classList.toggle("sidebar-active");
    sideBar.style.top = String(window.scrollY);
});
