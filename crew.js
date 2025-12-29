const crew = [
    {
        role: "Commander",
        name: "Douglas Hurley",
        image: "crew/image-douglas-hurley.png",
        bio: "Douglas Gerald Hurley is an American engineer, retired Marine Corps officer and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        role: "Mission Specialist",
        name: "Mark Shuttleworth",
        image: "crew/image-mark-shuttleworth.png",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        role: "Pilot",
        name: "Victor Glover",
        image: "crew/image-victor-glover.png",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        role: "Flight Engineer",
        name: "Anousheh Ansari",
        image: "crew/image-anousheh-ansari.png",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
];

const tabs = document.querySelectorAll(".crew-tabs button");
const image = document.querySelector(".crew-image img");
const role = document.querySelector(".crew-details h3");
const name = document.querySelector(".crew-details h1");
const bio = document.querySelector(".crew-details p");
const content = document.querySelector(".crew-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        if (tab.classList.contains("active")) return;

        tabs.forEach(btn => {
            btn.classList.remove("active");
            btn.setAttribute("aria-selected", "false");
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        content.classList.remove("fade-in");
        content.classList.add("fade-out");

        setTimeout(() => {
            const member = crew[index];

            image.src = member.image;
            image.alt = member.name;

            role.textContent = member.role;
            name.textContent = member.name;
            bio.textContent = member.bio;

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
