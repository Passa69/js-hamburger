const menu = document.querySelector("div.hamburger-menu");
const openButton = document.querySelector(".header-right > a");
const closeButton = document.querySelector("a.close");

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