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
        description: "The Brown Road Hill Trail is a lesser-known gem in the Mesa area, perfect for hikers seeking a quieter desert escape. This moderate hike takes you up a steady incline with some rocky terrain, leading to rewarding views of the surrounding desert landscape, Usery Mountains, and glimpses of the Phoenix metro area. The trail offers a peaceful, less crowded experience compared to some nearby trails, making it ideal for a quick escape into nature. Due to the open desert terrain, it’s best to tackle Brown Road Hill during the cooler months or early in the morning. Pack plenty of water, as there’s minimal shade, and be prepared for a brisk ascent that’ll give you a good workout without being overly challenging. Wildlife sightings are common, so keep an eye out for jackrabbits, cactus wrens, and even the occasional hawk soaring overhead.",
        imageUrl: "images/picture.jpg",
        lengthMiles: .9,
        elevationGain: 288
    },
    {
        hikeName: "Lower Salt River Nature Trail",
        location: "Fort McDowell, Arizona",
        description: "The Lower Salt River Nature Trail offers a serene desert hiking experience along the banks of the Salt River. This easy, flat trail is ideal for beginners, families, and wildlife enthusiasts. As you walk, you'll enjoy stunning views of the river, framed by towering saguaros and rugged desert terrain. The area is rich in local wildlife, and you might spot wild horses, great blue herons, and other bird species along the water’s edge. The trail is especially popular in the spring when wildflowers bloom and in the fall for cooler hiking conditions. As a year-round destination, it’s also a great spot for picnicking, birdwatching, or simply relaxing by the water after your hike.",
        imageUrl: "images/",
        lengthMiles: 2.4,
        elevationGain: 49
    },
    {
        hikeName: "Butcher Jones Trail",
        location: "Saguaro Lake, Tonto National Forest",
        description: "The Butcher Jones Trail is a scenic and popular hike located alongside Saguaro Lake, offering breathtaking views of the lake’s crystal blue waters framed by rugged desert cliffs. This moderate, well-maintained trail is known for its winding path through desert flora, including towering saguaro cacti, palo verde trees, and seasonal wildflowers. The trail follows the lakeshore, providing several panoramic viewpoints and even access to hidden coves and beach areas where hikers can relax or take a dip. Perfect for both hiking and birdwatching, the Butcher Jones Trail is a year-round favorite, though spring and fall offer the most comfortable temperatures. The trail can be narrow in places with a few rocky sections, so sturdy footwear is recommended. Keep an eye out for local wildlife, such as bighorn sheep, wild horses, and various water birds. Saguaro Lake’s marina is nearby, so you can end your hike with a picnic or grab a bite at the nearby lakeside cafe.",
        imageUrl: "images/",
        lengthMiles: 4.9,
        elevationGain: 541
    },
    {
        hikeName: "Merkle Memorial Trail",
        location: "Usery Park, Mesa, Arizona",
        description: "The Merkle Memorial Trail is an easy, accessible loop in Usery Mountain Regional Park, perfect for families, beginners, and anyone looking for a relaxed desert walk. This mile loop trail is wheelchair-friendly, with a well-maintained and mostly flat path that provides an up-close experience of Arizona’s Sonoran Desert ecosystem. Along the trail, hikers can enjoy a wide variety of desert flora, including towering saguaro cacti, prickly pear, and creosote bushes. Interpretive signs along the trail share information about local plant and animal life, making it a great educational experience for kids and newcomers to the desert. The Merkle Memorial Trail is also ideal for birdwatching, with quail, roadrunners, and other desert birds frequently spotted along the path. This short loop offers easy access to beautiful desert views and can be enjoyed year-round, especially in the cooler morning or evening hours.",
        imageUrl: "images/",
        lengthMiles: 1,
        elevationGain: 55
    },
    {
        hikeName: "Pass Mountain Trail",
        location: "Usery Mountain Park, Mesa, Arizona",
        description: "The Pass Mountain Trail, is a scenic and moderately challenging loop around Pass Mountain in Usery Mountain Regional Park. This 7.7-mile trail provides hikers with sweeping 360-degree views of the surrounding Sonoran Desert, including the Superstition Mountains and Goldfield Mountains. The trail features varied desert terrain, with gradual inclines, rocky stretches, and several high points where you can take in the expansive views. The trail takes you through beautiful desert landscapes filled with saguaro cacti, palo verde trees, and barrel cacti, as well as occasional sightings of local wildlife like jackrabbits, lizards, and hawks. This hike is best suited for those with some hiking experience due to its length and rugged sections. It’s recommended to start early in the day, especially during warmer months, and pack plenty of water and snacks. The Pass Mountain Trail is a favorite for those looking for a more secluded, immersive desert experience with diverse landscapes and fewer crowds. The trail can also be accessed from multiple points, allowing flexibility for shorter hikes if desired.",
        imageUrl: "images/",
        lengthMiles: 7.7,
        elevationGain: 1049
    },
    {
        hikeName: "Wind Cave Trail",
        location: "Usery Mountain Regional Park, Mesa, Arizona",
        description: "The Wind Cave Trail is a popular hike in Usery Mountain Regional Park that leads to a unique cave formation near the top of Pass Mountain. This 3-mile round-trip hike offers a moderately challenging climb with an elevation gain of about 800 feet, making it a favorite among hikers seeking a shorter but rewarding trek with stunning views. The trail is known for its desert scenery, including iconic saguaro cacti, cholla, and ocotillo, with sweeping views of the surrounding Phoenix Valley and Superstition Mountains. The hike ends at the Wind Cave, a natural alcove carved out by wind erosion. The cave provides a shady resting spot and a chance to observe desert flora growing out of the rock walls. Early mornings and late afternoons are ideal times for this hike to avoid the heat and to catch beautiful sunrise or sunset views. The Wind Cave Trail is suitable for intermediate hikers and families with older children, as some sections can be rocky and steep. It’s a fantastic way to experience the diverse plant life and panoramic vistas of the Sonoran Desert in a manageable, half-day outing.",
        imageUrl: "images/",
        lengthMiles: 3.2,
        elevationGain: 1043
    },
    {
        hikeName: "Hieroglyphic Trail",
        location: "Superstition Wilderness, Gold Canyon, Arizona",
        description: "The Hieroglyphic Trail is a scenic and culturally rich hike in the Superstition Wilderness, leading to a fascinating collection of ancient petroglyphs etched by the Hohokam people. This 2.8-mile round-trip trail is relatively short but offers a moderate challenge due to some rocky and uneven sections. The trail gradually ascends to a series of boulders and small pools, often filled with seasonal water, where petroglyphs can be found on the rocks. These rock carvings depict animals, human figures, and symbols, offering a glimpse into the area's ancient history. Surrounded by saguaro cacti, cholla, and beautiful desert landscapes, the trail provides excellent views of the Superstition Mountains along the way. The best time to hike is in the cooler months, as shade is limited, and the trail can get hot during midday. This family-friendly hike is popular among photographers, history buffs, and hikers of all levels. It’s best to bring sturdy shoes, plenty of water, and a camera to capture the petroglyphs and the beautiful desert scenery.",
        imageUrl: "images/",
        lengthMiles: 3,
        elevationGain: 567
    },
    {
        hikeName: "Flatiron Hike",
        location: "Superstition Wilderness, Apache Junction, Arizona",
        description: "The Flatiron Hike is one of the most popular and challenging hikes in the Superstition Mountains, known for its breathtaking views and rugged terrain. This 6-mile round-trip hike is steep and demanding, gaining approximately 1,200 feet in elevation, making it suitable for experienced hikers looking for a rewarding adventure. The trail begins at the First Water Trailhead and follows the steep ascent to the Flatiron, a prominent rock formation that offers panoramic views of the surrounding mountains and valleys. Hikers navigate rocky paths, switchbacks, and some scrambling, particularly as they approach the summit. Along the way, you'll be treated to stunning vistas of the iconic Superstition Mountains, diverse desert flora, and possibly wildlife like deer and various bird species. It's best to hike Flatiron in the early morning or late afternoon to avoid the heat and enjoy cooler temperatures, especially during the warmer months. Due to the strenuous nature of the hike, it’s essential to carry plenty of water, wear sturdy hiking shoes, and be prepared for challenging conditions. The payoff at the top is well worth the effort, as the breathtaking views from Flatiron create an unforgettable experience for those who reach its summit.",
        imageUrl: "images/",
        lengthMiles: 6,
        elevationGain: 2625
    },
]

createHikeCard(hikes);

const allhikesLink = document.querySelector("#all")
const shorthikesLink = document.querySelector("#short")
const longhikesLink = document.querySelector("#long")
const easyhikesLink = document.querySelector("#easy")
const difficulthikesLink = document.querySelector("#difficult")


allhikesLink.addEventListener("click", () => {
    createHikeCard(hikes)
});

shorthikesLink.addEventListener("click", () => {
    createHikeCard(hikes.filter(hikes => hikes.lengthMiles <= (1)))
});

longhikesLink.addEventListener("click", () => {
    createHikeCard(hikes.filter(hikes => hikes.lengthMiles > (1)))
});

easyhikesLink.addEventListener("click", () => {
    createHikeCard(hikes.filter(hikes => hikes.elevationGain < (500)))
});

difficulthikesLink.addEventListener("click", () => {
    createHikeCard(hikes.filter(hikes => hikes.elevationGain >= (500)))
});

function createHikeCard(filteredHikes) {
    document.querySelector(".hikes").innerHTML = "";
    filteredHikes.forEach(hike => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let description = document.createElement("p");
        let img = document.createElement("img");
        let length = document.createElement("p");
        let elevation = document.createElement("p");

        name.textContent = hike.hikeName;
        location.innerHTML = `<span class="label">Location:</span> ${hike.location}`;
        description.innerHTML = `<span class="label">Description:</span> ${hike.description}`;
        length.innerHTML = `<span class="label">Length:</span> ${hike.lengthMiles.toLocaleString()} Miles`;
        elevation.innerHTML = `<span class="label">Elevation:</span> ${hike.elevationGain.toLocaleString()} Feet`;

        img.setAttribute("src", hike.imageUrl);
        img.setAttribute("alt", `${hike.hikeName} Hike`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(description);
        card.appendChild(img);
        card.appendChild(length);
        card.appendChild(elevation);

        
        document.querySelector(".hikes").appendChild(card);
    });
}