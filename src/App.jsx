import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const experiences = [
    {
      title: "React Native Developer",
      company: "Berijalan",
      duration: "Aug 2023 - Feb 2024",
      responsibilities: [
        "Led development of key features for a financial application using React Native, ensuring high-quality code and optimal performance",
        "Implemented complex UI components and integrated RESTful APIs while maintaining strict security standards",
        "Successfully orchestrated the migration to React Native 0.73.1, improving app performance and user experience",
      ],
    },
    {
      title: "Generasi Gigih Fullstack Engineer",
      company: "GoTo Impact Foundation",
      duration: "Jun 2023 - Oct 2023",
      responsibilities: [
        "Mastered full-stack development utilizing the MERN stack, with emphasis on building scalable web applications",
        "Enhanced professional communication skills through intensive English language training and team collaborations",
        "Applied Kaizen principles to optimize development workflows and improve code quality",
        "Delivered multiple successful projects through effective team collaboration and agile methodologies",
      ],
    },
    {
      title: "Bootcamp Technocenter Internship",
      company: "Berijalan",
      duration: "Feb 2023 - Jun 2023",
      responsibilities: [
        "Acquired comprehensive expertise in modern development tools including TOADS, OutSystems, and Agile methodologies",
        "Developed and deployed a full-featured employee assessment platform with integrated content management system",
        "Engineered an interactive chatbot solution using React Native, implementing advanced UI/UX features and optimization",
      ],
    },
    {
      title: "Full Stack Development Study",
      company: "Hacktiv8",
      duration: "Aug 2022 - Dec 2022",
      responsibilities: [
        "Developed strong fundamentals in modern web technologies including HTML5, CSS3, and JavaScript ES6+",
        "Implemented state management solutions using Redux for complex application architectures",
        "Led development of three major projects: a movie discovery platform, an e-commerce solution, and a hotel booking system, focusing on user experience and performance optimization",
      ],
    },
  ];

  const education = {
    degree: "Bachelor of Computer Science - GPA 3.5",
    school: "Universitas Atma Jaya Yogyakarta",
    duration: "Aug 2019 - Nov 2024",
  };

  const skills = [
    {
      category: "Frontend",
      techs: [
        "React.js",
        "React Native",
        "JavaScript",
        "TypeScript",
        "HTML5/CSS3",
      ],
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    },
    {
      category: "Tools & Methods",
      techs: ["Git", "Agile/Scrum", "Redux", "Responsive Design"],
    },
  ];

  const projects = [
    {
      title: "Marketplace App with Management system",
      description:
        "A marketplace app with management system, where user can buy and sell product, and user can manage their product.",
      image: "/path-to-project-image.jpg",
      tech: ["React Native", "Redux", "Node.js", "Tailwind"],
      links: {
        github: "https://github.com/Penzslyr/SIB_React_005_FP2",
        live: "#",
      },
    },
    {
      title: "Website News ",
      description:
        "Website news where user can filter news by category, user can search news by title, and user can save news to favorite.",
      tech: ["React.js", "Chakra UI", "Redux"],
      links: {
        github: "https://github.com/Penzslyr/SIB_React_005_FP1",
        live: "#",
      },
    },
    {
      title: "Movie Discovery Platform",
      description: "Interactive movie search and discovery platform.",
      tech: ["React.js", "Tailwind"],
      links: {
        github: "https://github.com/Penzslyr/SIB_React_005_FP4",
        live: "#",
      },
    },
    {
      title: "Hotel Booking System",
      description:
        "Comprehensive booking platform with real-time availability checking, and saving availability hotel.",
      tech: ["React Native", "Expo Go", "Tailwind"],
      links: {
        github: "https://github.com/Penzslyr/SIB_React_005_FP3",
        live: "#",
      },
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Penzslyr",
      icon: "github-icon",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/effendi-prakoso/",
      icon: "linkedin-icon",
    },
  ];

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <div className="code-loading">
            <span className="line">const developer = {`{`}</span>
            <span className="line indent">name: "Effendi Prakoso",</span>
            <span className="line indent">role: "Full Stack Developer",</span>
            <span className="line indent">
              location: "Yogyakarta, Indonesia",
            </span>
            <span className="line">{`}`};</span>
          </div>
        </div>
      ) : (
        <div className="portfolio">
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <header className="hero">
            <p className="greeting">Hi, my name is</p>
            <h1 className="name">Effendi Prakoso</h1>
            <h2 className="role">
              Full Stack Developer specializing in modern web and mobile
              applications.
            </h2>
            <p className="bio">
              A Computer Science graduate with a strong foundation in full-stack
              development. Specializing in React Native and JavaScript
              ecosystems, I focus on creating scalable and performant
              applications with clean, maintainable code.
            </p>
          </header>

          <section id="about" className="section">
            <h2 className="section-title">About Me</h2>
            <div className="section-content">
              <p>
                As a detail-oriented developer, I combine technical expertise
                with a passion for creating exceptional user experiences. My
                experience spans from front-end development with React and React
                Native to backend integration using Node.js and MongoDB. I
                thrive in collaborative environments and am committed to
                continuous learning and implementing best practices in software
                development.
              </p>
            </div>
          </section>

          <section id="experience" className="section">
            <h2 className="section-title">Experience</h2>
            <div className="section-content">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                  <ul className="responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="section">
            <h2 className="section-title">Education</h2>
            <div className="section-content">
              <div className="education-item">
                <h3>{education.degree}</h3>
                <p className="school">{education.school}</p>
                <p className="duration">{education.duration}</p>
              </div>
            </div>
          </section>

          <section id="skills" className="section">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="section-content">
              <div className="skills-container">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-group">
                    <h3>{skillGroup.category}</h3>
                    <ul className="skill-list">
                      {skillGroup.techs.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-content">
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.links.github} className="project-link">
                        <span>GitHub</span>
                      </a>
                      <a href={project.links.live} className="project-link">
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="section">
            <h2 className="section-title">Contact</h2>
            <div className="section-content">
              <p className="contact-description">
                I'm currently open to new opportunities and collaborations.
                Let's discuss how we can work together to create exceptional
                digital experiences.
              </p>
              <div className="contact-links">
                <a
                  href="mailto:Fendi.prakoso048@gmail.com"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect via Email
                </a>
                <a
                  href="tel:082143941519"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Call
                </a>
              </div>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default App;
