import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const experienceRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for timeline animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Function to observe all refs
    const observeRefs = () => {
      experienceRefs.current.forEach((ref) => {
        if (ref && !ref.classList.contains('timeline-visible')) {
          observer.observe(ref);
        }
      });
    };

    // Use multiple attempts to ensure refs are set
    const timeoutId1 = setTimeout(observeRefs, 100);
    const timeoutId2 = setTimeout(observeRefs, 300);

    // Also observe immediately if refs are already available
    observeRefs();

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const workExperiences = [
    {
      title: "Software Engineering Intern",
      company: "Custom Heliarc",
      duration: "March 2025 - June 2025",
      description: "Automated repetitive documentation workflows by building Python scripting solutions, increasing efficiency by 100%. Delivered scalable tools for internal teams by integrating Python automation into existing Excel-based workflows",
      technologies: ["Python", "Excel", "Automation"]
    },
    {
      title: "Web Development Intern",
      company: "Clutch",
      duration: "October 2024 - December 2024",
      description: "Implemented responsive UI components with Next.js & TailwindCSS, improving design consistency and user engagement. Developed React TS websites for 3 clients, delivering customized solutions for businesses that contracted our services",
      technologies: ["Next.js", "TailwindCSS", "React", "MongoDB"]
    },
    {
      title: "Software Engineering Intern",
      company: "CottonHoldings",
      duration: "June 2024 - August 2024",
      description: "Engineered a scalable, full-stack data management system using React, Node.js, and MongoDB, implementing JWT authentication, RESTful APIs, and optimized UI/UX to ensure maximum efficiency for 50+ company employees.",
      technologies: ["React", "TypeScript", "RESTful APIs", "MongoDB"]
    },
    {
      title: "Foreman Intern",
      company: "NEAC",
      duration: "June 2023 - July 2023",
      description: "Directed a team of interns in digitizing and archiving 1000+ critical company documents, reducing physical storage costs. Designed and implemented a Python-based file parsing and organization script, automating large-scale data structuring.",
      technologies: ["Python Automation"]
    }
  ];

  const projects = [
    {
      name: "Safe Guard ID",
      description: "A facial-recognition powered electric hall pass system developed with a team from Seven Lakes High School. This innovative solution improves safety, efficiency, and accountability in educational environments using modern technology.",
      tech: ["Next.js", "JavaScript", "Tailwind CSS"],
      link: "https://safe-guard-id.vercel.app/",
      featured: true
    },
    {
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, payment processing, and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"]
    }
  ];

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">VS</div>
          <ul className="nav-menu">
            <li>
              <button
                className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'experience' ? 'nav-link active' : 'nav-link'}
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-content">
          <h1 className="name-title">
            <span className="name-text">Vaibav Subramanian</span>
          </h1>
          <div className="about-me">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              Welcome to my portfolio! I'm a passionate software developer with a strong foundation in
              full-stack development and a keen interest in creating innovative solutions. I enjoy
              working on challenging projects that push the boundaries of technology and make a positive
              impact. When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or working on personal side projects.
            </p>
            <p className="about-text">
              I'm currently pursuing a Bachelor's degree in <b>Electrical and Computer Engineering</b> at the <b> University of Texas at Austin </b> and I'm continuously learning new skills. My goal is to build meaningful applications that solve
              real-world problems and provide exceptional user experiences.
            </p>
            <div className="resume-download">
              <a
                href="/resume283.pdf"
                download="Vaibav_Subramanian_Resume.pdf"
                className="resume-button"
              >
                <svg className="resume-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <h2 className="section-header">Experience</h2>
          <div className="experience-timeline">
            {workExperiences.map((experience, index) => (
              <div
                key={index}
                className="experience-timeline-item"
                ref={(el) => {
                  if (el) experienceRefs.current[index] = el;
                }}
              >
                <div className="timeline-marker"></div>
                <div className="experience-card timeline-card">
                  <div className="experience-header">
                    <h3 className="experience-title">{experience.title}</h3>
                    <span className="experience-company">{experience.company}</span>
                  </div>
                  <span className="experience-duration">{experience.duration}</span>
                  <p className="experience-description">{experience.description}</p>
                  <div className="experience-tech">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-header">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-overlay"
                  >
                    <div className="project-link-indicator">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Visit Project
                    </div>
                  </a>
                )}
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Embed */}
          <div className="github-section">
            <h3 className="github-title">Check out my GitHub</h3>
            <div className="github-container">
              <iframe
                src="https://github-readme-stats.vercel.app/api?username=vvaibavs&show_icons=true&theme=dark&hide_border=true&bg_color=1a1a1a&title_color=BF5700&icon_color=BF5700&text_color=ffffff"
                className="github-stats"
                title="GitHub Stats"
                frameBorder="0"
              ></iframe>
              <div className="github-link-container">
                <a
                  href="https://github.com/vvaibavs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View My GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default App;
