// Filter accordion
let icons = document.getElementsByClassName('icons');
for (let i = 0; i < icons.length; i++) {
    icons[i].onclick = function () {
        let content = this.nextElementSibling;
        if (this.innerHTML === '+') {
            this.innerHTML = '×';
            content.style.maxHeight = content.scrollHeight + 'px';
        } else if (this.innerHTML === '×') {
            this.innerHTML = '+';
            content.style.maxHeight = 0;
        }
    }
}
// Apartment section filling
let apartmentArr = [
    {
        src: 'images/apartment1.png',
        name: 'Alps Apartments',
        address: 'Vasant Kunj, New Delhi'
    },
    {
        src: 'images/apartment2.png',
        name: 'Bluebells Apartments',
        address: 'Sector 34, Greater Noida'
    },
    {
        src: 'images/apartment3.png',
        name: 'Cheddar Apartments',
        address: 'Vasant Vihar, New Delhi'
    },
    {
        src: 'images/apartment4.png',
        name: 'Deerhill Apartments',
        address: 'Dwarka, New Delhi'
    },
    {
        src: 'images/apartment5.png',
        name: 'Elm Apartments',
        address: 'Borivali, Mumbai'
    },
    {
        src: 'images/apartment6.png',
        name: 'Fern Apartments',
        address: 'Gurugram, Haryana'
    },
    {
        src: 'images/apartment7.png',
        name: "Godric's hollow",
        address: 'West Country, England'
    },
    {
        src: 'images/apartment8.png',
        name: 'Hill Apartments',
        address: 'Anna Nagar, Chennai'
    },
    {
        src: 'images/apartment9.png',
        name: 'Ivy Apartments',
        address: 'Alur, Bengaluru'
    }
]
let apartments = document.getElementById("apartments");
for (let i in apartmentArr) {
    let apartment = document.createElement('div');
    apartment.className = 'apartment';
    apartment.innerHTML = `
    <img src='${apartmentArr[i].src}'/>
    <h3 class="name">${apartmentArr[i].name}</h3>
    <h6 class="address">${apartmentArr[i].address}</h6>
    <a class="more">More <span class="arrow">-></span></a>
    <button class="material-icons bIcon" onclick="fillbookmark()">bookmark_border</button>
    `;
    apartments.appendChild(apartment);
}
// Searching apartment
function searchApartment() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let names = document.getElementsByClassName('name');
    let addresses = document.getElementsByClassName('address');
    let apartments = document.getElementsByClassName('apartment');
    for (let i in names) {
        if (!names[i].innerHTML.toLowerCase().includes(input) && !addresses[i].innerHTML.toLowerCase().includes(input)) {
            apartments[i].style.display = 'none';
        } else {
            apartments[i].style.display = 'block';
        }
    }
}