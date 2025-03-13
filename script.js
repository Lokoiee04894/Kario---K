document.addEventListener("DOMContentLoaded", function () {
    const openFormBtn = document.querySelector(".open-form-btn");
    const popupContainer = document.querySelector(".popup-form-container");
    const overlay = document.querySelector(".popup-overlay");
    const closeBtn = document.querySelector(".close-btn");
    const contactForm = document.querySelector(".popup-form-container form");

    openFormBtn.addEventListener("click", function () {
        popupContainer.classList.add("active");
        overlay.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        popupContainer.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function () {
        popupContainer.classList.remove("active");
        overlay.classList.remove("active");
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you! Your message has been received.");
        contactForm.reset();
        popupContainer.classList.remove("active");
        overlay.classList.remove("active");
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    const onScroll = () => {
        elements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();  
});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-career");

    if (!searchInput) {
        console.error("Error: Search bar element not found!");
        return;
    }

    const careerCards = document.querySelectorAll(".career-card");

    function filterCareers() {
        const searchText = searchInput.value.toLowerCase().trim();

        let found = false;
        careerCards.forEach(card => {
            const careerTitle = card.querySelector("h3").textContent.toLowerCase();

            if (careerTitle.includes(searchText)) {
                card.style.display = "block"; 
                found = true;
            } else {
                card.style.display = "none";
            }
        });

        if (!found) {
            console.warn("No matching career found!");
        }
    }

    searchInput.addEventListener("input", filterCareers);
});




const careers = {
    "software-developer": {
        title: "Software Developer",
        description: "Design and build software applications.",
        details: "Software developers create, test, and maintain software systems.",
        skills: ["Programming", "Problem-Solving", "Data Structures"],
        salary: "$80,000 - $120,000 per year"
    },
    "data-scientist": {
        title: "Data Scientist",
        description: "Analyze and interpret complex data to help businesses.",
        details: "They use statistical techniques, machine learning, and AI.",
        skills: ["Statistics", "Machine Learning", "Python/R"],
        salary: "$100,000 - $150,000 per year"
    },
    "doctor": {
        title: "Doctor",
        description: "Diagnose and treat illnesses to save lives.",
        details: "Doctors work in hospitals, clinics, and research.",
        skills: ["Medical Knowledge", "Empathy", "Critical Thinking"],
        salary: "$100,000 - $250,000 per year"
    }
    
};

function loadCareerDetails() {
    const params = new URLSearchParams(window.location.search);
    const careerId = params.get("career");

    if (careerId && careers[careerId]) {
        document.getElementById("career-title").innerText = careers[careerId].title;
        document.getElementById("career-description").innerText = careers[careerId].description;
        document.getElementById("career-details").innerText = careers[careerId].details;
        document.getElementById("career-salary").innerText = careers[careerId].salary;

        // Populate Skills
        const skillsList = document.getElementById("career-skills");
        skillsList.innerHTML = "";
        careers[careerId].skills.forEach(skill => {
            let li = document.createElement("li");
            li.innerText = skill;
            skillsList.appendChild(li);
        });
    } else {
        document.getElementById("career-title").innerText = "Career Not Found";
    }
}



// new

function searchCareer() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let cards = document.querySelectorAll(".career-card");
    let careerList = document.getElementById("career-list");

    let matches = [];

    cards.forEach((card) => {
        let title = card.getAttribute("data-title").toLowerCase();
        if (title.includes(input)) {
            card.style.display = "block";
            matches.push(card);
        } else {
            card.style.display = "none";
        }
    });

    if (matches.length > 0) {
        matches.sort((a, b) => {
            let aTitle = a.getAttribute("data-title").toLowerCase();
            let bTitle = b.getAttribute("data-title").toLowerCase();
            return aTitle.indexOf(input) - bTitle.indexOf(input);
        });

        matches.forEach((match) => careerList.prepend(match));
    }
}
