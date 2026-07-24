import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Weather Checker",
      description: "Real-time weather app with city search, temperature, and wind data from Open-Meteo API",
      image: "🌤️",
      tags: ["JavaScript", "Fetch API", "Responsive"],
      link: "https://stellar-daifuku-6ddcfd.netlify.app/"
    },
    {
      title: "Expense Tracker",
      description: "Track spending by category with running totals, filtering, and persistent storage",
      image: "💰",
      tags: ["React", "useState", "localStorage"],
      link: "https://effulgent-capybara-85e188.netlify.app/"
    },
    {
      title: "Quiz App",
      description: "Interactive quiz with instant feedback, scoring system, and restart functionality",
      image: "🧠",
      tags: ["React", "State Management"],
      link: "https://spontaneous-stroopwafel-eca9cc.netlify.app/"
    },
    {
      title: "Recipe Finder",
      description: "Search recipes with full ingredients and instructions from TheMealDB API",
      image: "🍳",
      tags: ["React", "API Integration"],
      link: "https://courageous-otter-5840aa.netlify.app/."
    },
    {
      title: "Movie Search",
      description: "Search and discover movies with detailed info from OMDb API, ratings and cast",
      image: "🎬",
      tags: ["React", "Axios", "Movie Data"],
      link: "https://spontaneous-stroopwafel-eca9cc.netlify.app/"
    },
    {
      title: "Markdown Preview",
      description: "Live markdown editor with split-view preview and download functionality",
      image: "📝",
      tags: ["React", "react-markdown"],
      link: "https://inquisitive-basbousa-089398.netlify.app/"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript ES6+", "React"] },
    { category: "Tools", items: ["Git & GitHub", "Vite", "npm", "VS Code"] },
    { category: "APIs", items: ["Fetch API", "Axios", "REST APIs", "localStorage"] },
    { category: "Design", items: ["Responsive Design", "CSS Flexbox", "Grid Layout"] }
  ];

  const socials = [
    { name: "GitHub", link: "https://github.com/Mariatabbasum804" },
    { name: "LinkedIn", link: "https://linkedin.com" },
    { name: "Twitter", link: "https://twitter.com" }
  ];

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-emoji">💻</span>
            <span>Your Portfolio</span>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span className="name">Maria <Tabassam></Tabassam></span></h1>
          <p className="hero-subtitle">Frontend Developer | JavaScript Enthusiast | Building Beautiful Web Experiences</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </header>

      <section id="about" className="section about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a self-taught frontend developer passionate about creating clean, functional, and beautiful web applications. With expertise in JavaScript, React, and responsive design, I transform ideas into working products.</p>
              <p>I specialize in building dynamic user interfaces and integrating APIs. Currently exploring modern web tooling and open to freelance opportunities and collaborations.</p>
              <div className="socials">
                {socials.map((social, idx) => (
                  <a key={idx} href={social.link} target="_blank" rel="noreferrer" className="social-link">
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <a key={idx} href={project.link} target="_blank" rel="noreferrer" className="project-card">
                <div className="project-icon">{project.image}</div>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-link-arrow">View Project →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-group">
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-container">
          <h2 className="section-title">Let's Work Together</h2>
          {submitted ? (
            <div className="success-message">
              <p>✓ Thanks for reaching out! I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          )}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. Built with React & ❤️</p>
      </footer>
    </div>
  );
}

export default App