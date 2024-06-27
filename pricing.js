function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

var bookButtons = document.querySelectorAll(".card button");
bookButtons.forEach(function(button) {
    button.addEventListener("click", showPopup);
});