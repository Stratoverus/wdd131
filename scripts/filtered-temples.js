window.onload = function() {
    //current year area
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    //Last Modified area
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
};

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Mount Timpanogos Utah",
        location: "American Fork, Utah, United States",
        dedicated: "1996, October, 19",
        area: 107240,
        imageUrl: "images/mount-timpanogos-temple.jpg"
    },
    {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona, United States",
        dedicated: "1927, October, 26",
        area: 75000,
        imageUrl: "images/mesa-arizona-temple.jpeg"
    },
    {
        templeName: "Gilbert Arizona",
        location: "Gilbert, Arizona, United States",
        dedicated: "2014, March, 2",
        area: 85326,
        imageUrl: "images/gilbert-arizona.jpg"
    },
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "images/aba-nigeria-temple-lds.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "images/manti-utah-lds.jpg"
      },
      {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "images/payson-utah-temple-daylight.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "images/yigo-guam-temple.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "images/washington-dc-temple.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "images/lima-peru-temple.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "images/mexico-city-temple.jpg"
      },
      {
        templeName: "London England",
        location: "London, United Kingdom",
        dedicated: "1958, September, 9",
        area: 42652,
        imageUrl:
        "images/london-england-temple.jpg"
      },
]

createTempleCard(temples);

const alltemplesLink = document.querySelector("#alltemples")
const oldtemplesLink = document.querySelector("#oldtemples")
const newtemplesLink = document.querySelector("#newtemples")
const largetemplesLink = document.querySelector("#largetemples")
const smalltemplesLink = document.querySelector("#smalltemples")

alltemplesLink.addEventListener("click", () => {
    createTempleCard(temples)
});

oldtemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temples => temples.dedicated.startsWith(18)))
});

newtemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temples => temples.dedicated.startsWith(20)))
});

largetemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temples => temples.area > (90000)))
});

smalltemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temples => temples.area < (10000)))
});

function createTempleCard(filteredTemples) {
    document.querySelector(".gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        
        document.querySelector(".gallery").appendChild(card);
    });
}