// Project data
const projects = [{
        id: 1,
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
        image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=600&h=400&fit=crop",
        technologies: ["React", "Node.js"],
        projectLink: "https://nxtshopping12.ccbp.tech",
        githubLink: "#"
    },
    {
        id: 2,
        title: "My Own YouTube site",
        description: "A site which is inspired from YouTube, username and passwoard authentication.It has trending page,saved videos,Dark mode and Light mode.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
        technologies: ["React.js", "Node.js"],
        githubLink: "#",
        projectLink: "https://myownyoutube.ccbp.tech"
    },
    {
        id: 3,
        title: "Fitness Tracker",
        description: "A fitness tracking application with workout plans, progress charts, and social sharing features.",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop",
        technologies: ["Angular", "MongoDB"],
        githubLink: "#",
        projectLink: "#"
    }
];

// Technical skills data
const technicalSkills = [{
        name: 'HTML5',
        icon: 'fab fa-html5',
        type: 'frontend',
        color: 'text-orange-500'
    },
    {
        name: 'CSS3',
        icon: 'fab fa-css3-alt',
        type: 'frontend',
        color: 'text-blue-500'
    },
    {
        name: 'JavaScript',
        icon: 'fab fa-js',
        type: 'frontend',
        color: 'text-yellow-500'
    },
    {
        name: 'React',
        icon: 'fab fa-react',
        type: 'frontend',
        color: 'text-blue-400'
    },
    {
        name: 'Vue.js',
        icon: 'fab fa-vuejs',
        type: 'frontend',
        color: 'text-green-500'
    },
    {
        name: 'Bootstrap',
        icon: 'fab fa-bootstrap',
        type: 'frontend',
        color: 'text-purple-500'
    },
    {
        name: 'Node.js',
        icon: 'fab fa-node-js',
        type: 'backend',
        color: 'text-green-600'
    },
    {
        name: 'Express',
        icon: 'fas fa-server',
        type: 'backend',
        color: 'text-gray-700'
    },
    {
        name: 'MongoDB',
        icon: 'fas fa-database',
        type: 'backend',
        color: 'text-blue-600'
    },
    {
        name: 'MySQL',
        icon: 'fas fa-database',
        type: 'backend',
        color: 'text-orange-500'
    },
    {
        name: 'Python',
        icon: 'fab fa-python',
        type: 'backend',
        color: 'text-blue-500'
    },
    {
        name: 'Firebase',
        icon: 'fas fa-fire',
        type: 'backend',
        color: 'text-red-500'
    },
];

// Professional skills data
const professionalSkills = [{
        name: 'Problem Solving',
        percentage: 95,
        color: 'bg-primary'
    },
    {
        name: 'Teamwork',
        percentage: 90,
        color: 'bg-secondary'
    },
    {
        name: 'Aptitude',
        percentage: 60,
        color: 'bg-accent',
    },
    {
        name: 'Communication',
        percentage: 85,
        color: 'bg-accent'
    },
    {
        name: 'Project Management',
        percentage: 80,
        color: 'bg-yellow-500'
    },
    {
        name: 'Creativity',
        percentage: 88,
        color: 'bg-purple-500'
    },
];

// Tools data
const tools = [
    'Git', 'Docker', 'VS Code', 'Figma', 'Photoshop', 'Jira', 'AWS', 'Heroku', 'Netlify'
];

// DOM Elements
const navbarElement = document.getElementById('main-navbar');
const fadeElements = document.querySelectorAll('.fade-in');
const projectsContainer = document.getElementById('projects-container');
const frontendSkillsContainer = document.getElementById('frontend-skills');
const backendSkillsContainer = document.getElementById('backend-skills');
const professionalSkillsContainer = document.getElementById('professional-skills');
const toolsContainer = document.getElementById('tools');
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');
const currentYearElement = document.getElementById('current-year');
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toast-title');
const toastMessage = document.getElementById('toast-message');

// Set current year in footer
currentYearElement.textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbarElement.classList.add('shadow-sm');
    } else {
        navbarElement.classList.remove('shadow-sm');
    }
});

// Handle smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');

            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });
});

// Intersection Observer for fade-in animation
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    }
);

fadeElements.forEach(element => {
    observer.observe(element);
});

// Populate projects
function renderProjects() {
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'col-md-6 col-lg-4';

        projectElement.innerHTML = `
      <div class="card border-0 shadow-sm rounded-lg overflow-hidden project-card h-100">
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body p-4">
          ${project.technologies.map(tech => {
            let bgClass = 'bg-primary';
            if (tech === 'Vue.js') bgClass = 'bg-success';
            if (tech === 'Firebase') bgClass = 'bg-info';
            if (tech === 'Angular' || tech === 'MongoDB') bgClass = 'bg-warning text-dark';
            
            return `<span class="badge ${bgClass} mb-2 me-1">${tech}</span>`;
          }).join('')}
          <h3 class="card-title h5 font-semibold mb-3">${project.title}</h3>
          <p class="card-text text-gray-600 mb-4">${project.description}</p>
          <div class="mt-auto pt-3 border-t border-gray-200">
            <div class="d-flex justify-content-between">
              <a href="${project.projectLink}" class="text-primary hover-link font-medium">View Project</a>
              <a href="${project.githubLink}" class="text-gray-600 hover-link"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;

        projectsContainer.appendChild(projectElement);
    });
}

// Populate skills
function renderSkills() {
    // Frontend skills
    const frontendSkills = technicalSkills.filter(skill => skill.type === 'frontend');
    frontendSkillsContainer.innerHTML = '';

    frontendSkills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'd-flex align-items-center skill-icon';

        skillElement.innerHTML = `
      <div class="w-12 h-12 rounded-full bg-blue-100 d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;">
        <i class="${skill.icon} ${skill.color}" style="font-size: 1.5rem;"></i>
      </div>
      <span>${skill.name}</span>
    `;

        frontendSkillsContainer.appendChild(skillElement);
    });

    // Backend skills
    const backendSkills = technicalSkills.filter(skill => skill.type === 'backend');
    backendSkillsContainer.innerHTML = '';

    backendSkills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'd-flex align-items-center skill-icon';

        skillElement.innerHTML = `
      <div class="w-12 h-12 rounded-full bg-green-100 d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;">
        <i class="${skill.icon} ${skill.color}" style="font-size: 1.5rem;"></i>
      </div>
      <span>${skill.name}</span>
    `;

        backendSkillsContainer.appendChild(skillElement);
    });

    // Professional skills
    professionalSkillsContainer.innerHTML = '';

    professionalSkills.forEach(skill => {
        const skillElement = document.createElement('div');

        skillElement.innerHTML = `
      <div class="d-flex justify-content-between mb-1">
        <span class="font-medium">${skill.name}</span>
        <span>${skill.percentage}%</span>
      </div>
      <div class="w-100 bg-gray-200 rounded-full" style="height: 10px;">
        <div class="${skill.color} rounded-full" style="height: 10px; width: ${skill.percentage}%"></div>
      </div>
    `;

        professionalSkillsContainer.appendChild(skillElement);
    });

    // Tools
    toolsContainer.innerHTML = '';

    tools.forEach(tool => {
        const toolElement = document.createElement('span');
        toolElement.className = 'px-3 py-1 bg-gray-100 rounded-full text-gray-700';
        toolElement.textContent = tool;

        toolsContainer.appendChild(toolElement);
    });
}

// Contact form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('nameInput').value,
        email: document.getElementById('emailInput').value,
        subject: document.getElementById('subjectInput').value,
        message: document.getElementById('messageInput').value
    };

    // Basic validation
    let isValid = true;

    if (formData.name.length < 2) {
        document.getElementById('nameInput').classList.add('is-invalid');
        document.querySelector('.name-error').textContent = 'Name must be at least 2 characters';
        isValid = false;
    } else {
        document.getElementById('nameInput').classList.remove('is-invalid');
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        document.getElementById('emailInput').classList.add('is-invalid');
        document.querySelector('.email-error').textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        document.getElementById('emailInput').classList.remove('is-invalid');
    }

    if (formData.subject.length < 3) {
        document.getElementById('subjectInput').classList.add('is-invalid');
        document.querySelector('.subject-error').textContent = 'Subject must be at least 3 characters';
        isValid = false;
    } else {
        document.getElementById('subjectInput').classList.remove('is-invalid');
    }

    if (formData.message.length < 10) {
        document.getElementById('messageInput').classList.add('is-invalid');
        document.querySelector('.message-error').textContent = 'Message must be at least 10 characters';
        isValid = false;
    } else {
        document.getElementById('messageInput').classList.remove('is-invalid');
    }

    if (!isValid) return;

    // Display loading state
    submitButton.disabled = true;
    submitButton.innerHTML = `
    <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
    Sending...
  `;

    try {
        // Send data to server (in a real app)
        // const response = await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(formData)
        // });

        // For demo purposes, simulate successful submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success toast
        toastTitle.textContent = 'Message Sent';
        toastMessage.textContent = 'Thank you for your message. I\'ll get back to you soon.';

        // Create a Bootstrap toast instance and show it
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();

        // Reset form
        contactForm.reset();

    } catch (error) {
        console.error('Contact form error:', error);

        // Show error toast
        toastTitle.textContent = 'Error';
        toastMessage.textContent = 'Failed to send message. Please try again later.';

        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    } finally {
        // Reset button state
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane ms-2"></i>';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
});
