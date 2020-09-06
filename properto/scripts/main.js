var openModalButtons = document.querySelectorAll('[data-modal-target]');
var closeModalButtons = document.querySelectorAll('[data-close-button]');
var overlay = document.getElementById('overlay');
var icons = document.getElementsByClassName('icon');
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        var modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})
overlay.addEventListener('click', () => {
    var modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        var modal = button.closest('.modal')
        closeModal(modal)
    })
})
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
function searchApartment() {
    var apartments = document.getElementsByClassName("apartment");
    var names = document.getElementsByClassName("name");
    var addresses = document.getElementsByClassName("address");
    var input = document.getElementById("searchBar").value;
    var ipt = input.toLowerCase();
    for (i = 0; i < names.length; i++) {
        if (!names[i].innerHTML.toLowerCase().includes(ipt) && !addresses[i].innerHTML.toLowerCase().includes(ipt)) {
            apartments[i].style.display = "none";
        } else {
            apartments[i].style.display = "";
        }
    }
}
for (var k = 0; k < icons.length; k++) {
    icons[k].onclick = function () {
        var content = this.nextElementSibling;
        if (this.innerHTML === "+") {
            this.innerHTML = "×";
            content.style.maxHeight = content.scrollHeight + "px";
        }
        else if (this.innerHTML === "×") {
            this.innerHTML = "+";
            content.style.maxHeight = null;
        }
    }
}