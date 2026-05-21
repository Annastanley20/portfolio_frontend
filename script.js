// REPLACE THIS URL with your actual Render backend URL
const API_URL = 'https://anna-portifolio-api.onrender.com/api/portfolio';

async function fetchPortfolio() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Update Name and Profile
        document.getElementById('name').innerText = data.name;
        document.getElementById('profile').innerText = data.profile;

        // Update Projects
        const projectsContainer = document.getElementById('projects');
        projectsContainer.innerHTML = ''; // Clear loading state
        
        data.projects.forEach(project => {
            const projectElement = document.createElement('a');
            projectElement.href = data.contact.github;
            projectElement.target = "_blank";
            projectElement.className = 'project-card';
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsContainer.appendChild(projectElement);
        });

        // Update Contacts
        document.getElementById('email-link').href = `mailto:${data.contact.email}`;
        document.getElementById('email-link').innerText = data.contact.email;
        document.getElementById('github-link').href = data.contact.github;
        document.getElementById('phone-link').href = `tel:${data.contact.phone}`;

    } catch (error) {
        console.error('There was an error!', error);
        document.getElementById('name').innerText = "Failed to load.";
        document.getElementById('profile').innerText = "Please check if your Render backend is live.";
    }
}

fetchPortfolio();