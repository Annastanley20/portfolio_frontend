const API_URL = 'https://anna-portifolio-api.onrender.com/api/portfolio';

async function fetchPortfolio() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // 1. Populate Name and Profile
        document.getElementById('name').innerText = data.name;
        document.getElementById('profile').innerText = data.profile;

        // 2. Populate Skills (Render into the specific grid)
        const skillsGrid = document.getElementById('skills');
        skillsGrid.innerHTML = ''; 
        data.skills.forEach(skill => {
            const div = document.createElement('div');
            div.className = 'skill-item';
            div.innerText = skill;
            skillsGrid.appendChild(div);
        });

        // 3. Populate Qualifications (Render into the UL list)
        const qualList = document.getElementById('qualifications');
        qualList.innerHTML = ''; 
        data.qualifications.forEach(q => {
            const li = document.createElement('li');
            li.innerHTML = `<span><strong>${q.Certification}</strong></span> <span>${q.Year}</span>`;
            qualList.appendChild(li);
        });

        // 4. Populate Projects as Clickable Cards
        const projectLayout = document.getElementById('projects');
        projectLayout.innerHTML = ''; 
        data.projects.forEach(p => {
            const card = document.createElement('a');
            card.className = 'clickable-project-card';
            card.href = data.contact.github; 
            card.target = '_blank';
            card.innerHTML = `
                <div>
                    <strong>${p.title}</strong>
                    <p>${p.description}</p>
                </div>
                <span class="project-action-text">Explore Project <i class="fa-solid fa-arrow-right"></i></span>
            `;
            projectLayout.appendChild(card);
        });

        // 5. Populate Clickable Contact Buttons
        const contactFlex = document.getElementById('contact');
        contactFlex.innerHTML = `
            <a href="mailto:${data.contact.email}" class="clickable-contact-btn">
                <i class="fa-solid fa-envelope"></i> Send Email
            </a>
            <a href="tel:${data.contact.phone}" class="clickable-contact-btn">
                <i class="fa-solid fa-phone"></i> Call Phone
            </a>
            <a href="${data.contact.github}" target="_blank" class="clickable-contact-btn github-color">
                <i class="fa-brands fa-github"></i> Open GitHub
            </a>
        `;

    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById('name').innerText = "Failed to load portfolio data.";
        document.getElementById('profile').innerText = "Please ensure your Render API is active and CORS is allowed.";
    }
}

fetchPortfolio();