const API_URL = 'https://anna-portfolio-api.onrender.com/api/portfolio';

async function fetchPortfolio() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        document.getElementById('name').innerText = data.name;
        document.getElementById('profile').innerText = data.profile;

        const skillsContainer = document.getElementById('skills');
        data.skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'skill-badge';
            span.innerText = skill;
            skillsContainer.appendChild(span);
        });

        const qualContainer = document.getElementById('qualifications');
        data.qualifications.forEach(q => {
            const div = document.createElement('div');
            div.className = 'qualification-item';
            div.innerHTML = `<strong>${q.Year}</strong> - ${q.Certification}`;
            qualContainer.appendChild(div);
        });

        const projectGrid = document.getElementById('projects');
        data.projects.forEach(p => {
            const card = document.createElement('a');
            card.className = 'project-card';
            card.href = data.contact.github; 
            card.target = '_blank';
            
            card.innerHTML = `
                <div>
                    <strong>${p.title}</strong>
                    <p>${p.description}</p>
                </div>
                <span class="project-link">View Project <i class="fa-solid fa-arrow-right"></i></span>
            `;
            projectGrid.appendChild(card);
        });

        const contactDiv = document.getElementById('contact');
        contactDiv.innerHTML = `
            <a href="mailto:${data.contact.email}" class="contact-button">
                <i class="fa-solid fa-envelope" style="color: #ea4335;"></i> Email Me
            </a>
            <a href="tel:${data.contact.phone}" class="contact-button">
                <i class="fa-solid fa-phone" style="color: #34a853;"></i> Call Me
            </a>
            <a href="${data.contact.github}" target="_blank" class="contact-button github-btn">
                <i class="fa-brands fa-github"></i> GitHub Profile
            </a>
        `;

    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById('name').innerText = "Failed to load portfolio data.";
    }
}

fetchPortfolio();