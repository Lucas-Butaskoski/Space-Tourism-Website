const destinations = [
    {
        name: "Moon",
        image: "destination/image-moon.png",
        description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days"
    },
    {
        name: "Mars",
        image: "destination/image-mars.png",
        description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! Visit the Jezero Crater before it’s filled with water.",
        distance: "225 mil. km",
        travel: "9 months"
    },
    {
        name: "Europa",
        image: "destination/image-europa.png",
        description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years"
    },
    {
        name: "Titan",
        image: "destination/image-titan.png",
        description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years"
    }
];


const tabs = document.querySelectorAll(".destination-tabs button");
const image = document.querySelector(".destination-image img");
const title = document.querySelector(".destination-info h1");
const description = document.querySelector(".destination-info p");
const stats = document.querySelectorAll(".destination-stats strong");
const content = document.querySelector(".destination-content");


tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        if (tab.classList.contains("active")) return;

        tabs.forEach(btn => {
            btn.classList.remove("active");
            btn.setAttribute("aria-selected", "false");
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        content.classList.remove("fade-in", "fade-out");
        void content.offsetWidth;

        content.classList.add("fade-out");

        setTimeout(() => {
            const destination = destinations[index];

            image.src = destination.image;
            title.textContent = destination.name;
            description.textContent = destination.description;
            stats[0].textContent = destination.distance;
            stats[1].textContent = destination.travel;

            content.classList.remove("fade-out");
            content.classList.add("fade-in");
        }, 300);
    });
});



tabs.forEach((tab, index) => {
    tab.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            tabs[(index + 1) % tabs.length].focus();
        }
        if (e.key === "ArrowLeft") {
            tabs[(index - 1 + tabs.length) % tabs.length].focus();
        }
    });
});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
