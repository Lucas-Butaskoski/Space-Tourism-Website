const technologies = [
    {
        name: "Launch vehicle",
        imagePortrait: "technology/image-launch-vehicle-portrait.jpg",
        imageLandscape: "technology/image-launch-vehicle-landscape.jpg",
        description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        name: "Spaceport",
        imagePortrait: "technology/image-spaceport-portrait.jpg",
        imageLandscape: "technology/image-spaceport-landscape.jpg",
        description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        name: "Space capsule",
        imagePortrait: "technology/image-space-capsule-portrait.jpg",
        imageLandscape: "technology/image-space-capsule-landscape.jpg",
        description:
           "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
];

const tabs = document.querySelectorAll(".technology-tabs button");
const title = document.querySelector(".technology-info h1");
const description = document.querySelector(".technology-info p");
const image = document.querySelector(".technology-image img");
const content = document.querySelector(".technology-content");

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
            const tech = technologies[index];

            title.textContent = tech.name;
            description.textContent = tech.description;

            image.src = window.innerWidth > 1024
                ? tech.imagePortrait
                : tech.imageLandscape;

            image.alt = tech.name;

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
