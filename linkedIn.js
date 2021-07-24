let contactLink = document.querySelector(".contact");
let contactInfoBox = document.querySelector(".contactClickedInfo");

contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    contactInfoBox.classList.toggle("showContactClickedInfo");


})