const API_URL = 'https://anna-portifolio-api.onrender.com/api/portfolio';

async function fetchPortfolio() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // 1. Populate a detailed  professional intro bio
const longBio = "I am a passionate and highly motivated Data Science student at the Eastern Africa Statistical Training Centre (EASTC), specializing in transforming complex datasets into meaningful, actionable insights. My academic journey is deeply focused on combining advanced statistical modeling, predictive analytics, and machine learning structures with modern data visualization tools to solve real-world problems. Proficient in engineering data-driven solutions using R programming, Python, PowerBI, and advanced Excel, I am committed to driving innovation through rigorous quantitative analysis. I actively look forward to collaborating on impactful enterprise projects and leveraging state-of-the-art cloud computing technologies to advance the field of data analytics.";

document.getElementById('profile').innerText = longBio;

        /// 2. Populate  professional skills list
const skillsGrid = document.getElementById('skills');
skillsGrid.innerHTML = ''; // Futa kwanza vilivyopo

const mySkills = [
    "R Programming", "Python", "PowerBI", "Microsoft Excel", 
    "Data Analysis", "Data Visualization Tools", "Statistical Modeling", 
    "Machine Learning", "Cluster Analysis", "Predictive Analytics"
];

mySkills.forEach(skill => {
    const div = document.createElement('div');
    div.className = 'skill-item';
    div.innerText = skill;
    skillsGrid.appendChild(div);
});

        // 3. Populate Qualifications dynamically with current status
const qualList = document.getElementById('qualifications');
qualList.innerHTML = ''; // Futa vilivyopo kwanza

const li = document.createElement('li');
li.innerHTML = `<span><strong>Bachelor of Data Science (BDTS) Student</strong></span> <span>2024 - Present</span>`;
qualList.appendChild(li);

       // 4. Populate  3 specific dynamic projects
const projectLayout = document.getElementById('projects');
projectLayout.innerHTML = ''; 

const myProjects = [
    {
        title: "University Convocation Web System",
        description: "Developed a comprehensive and interactive university convocation website designed to streamline graduation events, manage alumni registrations, and publish formal graduation lists smoothly."
    },
    {
        title: "Machine Learning Cluster Analysis on Youth Unemployability",
        description: "Executed a sophisticated Unsupervised Machine Learning model using Cluster Analysis on CV and resume data to discover hidden patterns and group factors contributing to youth unemployment."
    },
    {
        title: "Interactive PowerBI Enterprise Sales Dashboard",
        description: "Designed a dynamic, end-to-end PowerBI dashboard tracking key performance indicators (KPIs), translating raw sales and business metrics into actionable commercial data visualizations."
    }
];

myProjects.forEach(p => {
    const card = document.createElement('a');
    card.className = 'clickable-project-card';
    card.href = data.contact.github; 
    card.target = '_blank';
    card.innerHTML = `
        <div>
            <strong>${p.title}</strong>
            <p>${p.description}</p>
        </div>
        <span class="project-action-text">Explore Project Details <i class="fa-solid fa-arrow-right"></i></span>
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