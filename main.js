document.addEventListener('DOMContentLoaded', function () {
    const options = {
        strings: [
            "Machine Learning Engineer.",
            "Data Scientist.",
            "MLOps Specialist.",
            "AI Enthusiast.",
            "Data Analyst"
        ], // Add roles or strings you want to display
        typeSpeed: 50, // Speed of typing
        backSpeed: 30, // Speed of deleting
        backDelay: 2000, // Delay before typing the next string
        loop: true, // Loop the typing effect
        showCursor: true, // Display the blinking cursor
        cursorChar: "", // Character for the cursor
    };

    const typed = new Typed("#role", options); // Initialize Typed.js on the #role element
});

  

  document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "ML", image: "https://cdn-icons-png.freepik.com/256/11751/11751499.png?ga=GA1.1.1940917551.1731427089&semt=ais_hybrid"},
        {name: "MLOPs" ,image:"https://cdn-icons-png.freepik.com/256/748/748847.png?ga=GA1.1.1940917551.1731427089&semt=ais_hybrid"},
        { name: "Data Analysis", image: "https://cdn-icons-png.freepik.com/256/12732/12732058.png?ga=GA1.1.1940917551.1731427089&semt=ais_hybrid" },
        { name: "Deep Learning", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "SQL", image: "https://cdn-icons-png.flaticon.com/128/2772/2772128.png" },
        { name: "NLP", image: "https://cdn-icons-png.freepik.com/256/10176/10176693.png?ga=GA1.1.1940917551.1731427089&semt=ais_hybrid" },
        { name: "Streamlit",image: "data:image/jpeg;base64,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"},
        {name:"Flask",image:"data:image/png;base64,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"},

        
    ];


    const skillsGrid = document.querySelector(".skills-grid");

    skills.forEach((skill) => {
        const skillCard = document.createElement("div");
        skillCard.classList.add("skill-card");
        skillCard.innerHTML = `
            <img src="${skill.image}" alt="${skill.name} Logo">
            <span>${skill.name}</span>
        `;
        skillsGrid.appendChild(skillCard);
    });
});



