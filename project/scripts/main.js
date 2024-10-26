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

const hikes = [
    {
        hikeName: "Spook Mountain",
        location: "Mesa, Arizona",
        description: "1996, October, 19",
        imageUrl: "images/picture.jpg",
        lengthMiles: .8,
        elevationGain: 328
    },
    {
        hikeName: "",
        location: "",
        description: "",
        imageUrl: "images/",
        lengthMiles: 0,
        elevationGain: 0
    },
    {
        hikeName: "",
        location: "",
        description: "",
        imageUrl: "images/",
        lengthMiles: 0,
        elevationGain: 0
    },
    {
        hikeName: "",
        location: "",
        description: "",
        imageUrl: "images/",
        lengthMiles: 0,
        elevationGain: 0
    },
    {
        hikeName: "",
        location: "",
        description: "",
        imageUrl: "images/",
        lengthMiles: 0,
        elevationGain: 0
    },
    {
        hikeName: "",
        location: "",
        description: "",
        imageUrl: "images/",
        lengthMiles: 0,
        elevationGain: 0
    },
    {
        hikeName: "",
        location: "",
        description: "",
        imageUrl: "images/",
        lengthMiles: 0,
        elevationGain: 0
    },
    {
        hikeName: "",
        location: "",
        description: "",
        imageUrl: "images/",
        lengthMiles: 0,
        elevationGain: 0
    },
    {
        hikeName: "",
        location: "",
        description: "",
        imageUrl: "images/",
        lengthMiles: 0,
        elevationGain: 0
    },
]