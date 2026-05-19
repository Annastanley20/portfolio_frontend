// DEFINE THE RENDER BACKEND API URL
const API_URL = 'https://anna-portifolio-api.onrender.com/api/portfolio';

async function fetchPortfolio() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Populate HTML elements with data fetched from the API
        document.getElementById('name').innerText = data.name;
        document.getElementById('profile').innerText = data.profile;

        // Populate Skills list
        const skillsList = document.getElementById('skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill;
            skillsList.appendChild(li);
        });

        // Populate Qualifications list
        const qualList = document.getElementById('qualifications');
        data.qualifications.forEach(q => {
            const li = document.createElement('li');
            li.innerText = `${q.Year}: ${q.Certification}`;
            qualList.appendChild(li);
        });

        // Populate Projects section
        const projectDiv = document.getElementById('projects');
        data.projects.forEach(p => {
            const div = document.createElement('div');
            div.className = 'project-card';
            div.innerHTML = `<strong>${p.title}</strong><p style="margin:5px 0 0 0; font-size:0.95em;">${p.description}</p>`;
            projectDiv.appendChild(div);
        });

        // Populate Contact information
        document.getElementById('contact').innerHTML = `
            <strong>Email:</strong> ${data.contact.email} <br>
            <strong>Phone:</strong> ${data.contact.phone} <br>
            <strong>GitHub:</strong> <a href="${data.contact.github}" target="_blank">${data.contact.github}</a>
        `;

    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById('name').innerText = "Failed to load portfolio data.";
    }
}

// Initialize the function when the page loads
fetchPortfolio();