var modal = document.querySelector(".modal-container")
var button = document.querySelector(".button")
var btnClose = document.querySelector(".span");

if (button) { 
    button.addEventListener("click", function () {
        modal.style.visibility = "visible";
    });
}

if (btnClose) { 
    btnClose.addEventListener("click", function () {
        modal.style.visibility = "hidden";
    });
}
var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");

if (btnSubmit) {
    btnSummit.addEventListener("click", function () { 
        modal.classList.add("show");

        const next = document.querySelector(".next");
        next.setAttribute(
          "value",
          "https://cobee-the-junior-programmer.netlify.app/contact.html",
        );
    });
}