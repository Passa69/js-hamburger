const menu = document.querySelector("div.hamburger-menu");
const closeButton = document.querySelector("a.close");
const openButton = document.querySelector(".header-right > a");

openButton.addEventListener(`click`, 
    function () {
        menu.classList.add('active');
    }
);

closeButton.addEventListener(`click`, 
    function () {
        menu.classList.remove('active');
    }
);