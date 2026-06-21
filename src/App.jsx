import { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaAngular, FaNodeJs, FaGitAlt, FaGithub as FaGithubSkill, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiGitlab } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import "./App.css";

const SKILL_ICONS = {
  "HTML5":               <FaHtml5      color="#e34f26" />,
  "CSS3":                <FaCss3Alt    color="#1572b6" />,
  "JavaScript":          <FaJs         color="#f7df1e" />,
  "TypeScript":          <SiTypescript color="#3178c6" />,
  "React.js":            <FaReact      color="#61dafb" />,
  "Tailwind CSS":        <SiTailwindcss color="#06b6d4" />,
  "Bootstrap":           <FaBootstrap  color="#7952b3" />,
  "Angular.js":          <FaAngular    color="#dd0031" />,
  "Node.js":             <FaNodeJs     color="#339933" />,
  "Express.js":          <SiExpress    color="#ffffff" />,
  "MongoDB":             <SiMongodb    color="#47a248" />,
  "Git":                 <FaGitAlt     color="#f05032" />,
  "GitHub":              <FaGithubSkill color="#ffffff" />,
  "Docker":              <FaDocker     color="#2496ed" />,
  "VS Code":             <VscCode      color="#007acc" />,
  "AWS Fundamentals":    <FaAws        color="#ff9900" />,
  "Amazon Q Developer":  <FaAws        color="#ff9900" />,
  "GitLab Duo":          <SiGitlab     color="#fc6d26" />,
};

const NAV_LINKS = ["About", "Skills", "Projects", "Education", "Contact"];

const SKILLS = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Tailwind CSS", "Bootstrap", "Angular.js"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB"],
  "Tools & Platforms": ["Git", "GitHub", "Docker", "VS Code"],
  "Cloud / AI": ["AWS Fundamentals", "Amazon Q Developer", "GitLab Duo"],
};

const PROJECTS = [
  {
    title: "Responsive Portfolio Website",
    desc: "Built a clean, mobile-friendly portfolio using HTML, CSS, and JavaScript with smooth animations and responsive layouts to showcase my skills and projects.",
    tags: ["HTML5", "CSS3", "JavaScript", "React.js"],
    live: "https://slg179.github.io/New-Portfolio/",
    repo: "https://github.com/SLG179/New-Portfolio",
  },
  {
    title: "Synapse Grid - NRI Support Service Platform",
    desc: "A centralized platform helping NRIs manage their financial, legal, and administrative needs in India from anywhere in the world. Bridging the distance with verified services, real-time updates, and seamless support.",
    tags: ["HTML5", "CSS3", "JavaScript", "React.js"],
    live: "https://slg179.github.io/Synapse-Grid-NRI-Support-Service/",
    repo: "https://github.com/SLG179/Synapse-Grid-NRI-Support-Service",
  },
  {
    title: "React-Based Dashboard UI",
    desc: "Built an interactive and responsive dashboard using React, featuring dynamic data visualization, reusable components, and a clean, modern interface.",
    tags: ["React.js", "Tailwind CSS"],
    live: "#",
    repo: "#",
  },
  {
    title: "E-commerce Frontend",
    desc: "Developed a clean and responsive e-commerce UI using HTML, CSS, and JavaScript. Implemented product listings, dynamic cart functionality, and smooth user interactions.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "#",
    repo: "#",
  },
];

const CERTS = [
  { name: "MERN Stack Web Developer Certification", link: "assets/Suraj%20Laxman%20Ghodke%20Course.pdf" },
  { name: "AWS: Amazon Q Developer Getting Started", link: "assets/Amazon Q Developer.pdf" },
  { name: "AWS: GitLab Duo with Amazon Q", link: "assets/GitLab Duo with Amazon Q.pdf" },
  { name: "AWS: Quiz - AWS Fundamentals", link: "assets/AWS_Fundamentals_Quiz__1777478009.pdf" },
  { name: "AWS: Amazon Aurora MySQL Basics", link: "assets/Amazon_Aurora_MySQL_Basics_1777478030.pdf" },
  { name: "AWS: AWS for Media & Entertainment Content Production Workstation Requirements", link: "assets/AWS_for_Media_Entertainment_1777478044.pdf" },
  { name: "AWS: AWS for Media & Entertainment Content Production Storage Essentials", link: "assets/AWS_for_Media_Entertainment_1777478084.pdf" },
  { name: "AWS: AWS for Media & Entertainment Content Production Workstation Design", link: "assets/AWS_for_Media_Entertainment_1777478056.pdf" },
  { name: "AWS: AWS for Media & Entertainment Content Production Concepts and Roles", link: "assets/AWS_for_Media_Entertainment_1777478071.pdf" },
  { name: "AWS: Fundamentals of Analytics on AWS Part 1", link: "assets/Fundamentals_of_Analytics_on_AWS_Part_1_1777477985.pdf" },
  { name: "AWS: Fundamentals of Analytics on AWS Part 2", link: "assets/Fundamentals_of_Analytics_on_AWS_Part_2_1777477997.pdf" },
  { name: "TCS iON Career Edge - Young Professional", link: "assets/Suraj_Ghodke_5003597.pdf" },
  { name: "TCS iON Career Edge - Interview & Job Readiness", link: "assets/Suraj_Ghodke_25273.pdf" },
  { name: "TCS iON Career Edge - IT Primer", link: "assets/Suraj_Ghodke_25274.pdf" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`anim-section ${inView ? "anim-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo" onClick={() => scrollTo("hero")}>SG</div>
      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <li key={l}>
            <button onClick={() => scrollTo(l === "Education" ? "education" : l.toLowerCase())} className="navbar__link">
              {l}
            </button>
          </li>
        ))}
        <li>
          <a href="mailto:surajghodke8888@gmail.com" className="navbar__cta">Hire Me</a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__grid"></div>
      </div>
      <div className={`hero__content ${visible ? "hero__content--visible" : ""}`}>
        <p className="hero__tag">MERN Stack Web Developer</p>
        <h1 className="hero__title">
          Hi, I'm <span className="hero__name">Suraj</span><br />
          <span className="hero__surname">Laxman Ghodke</span>
        </h1>
        <p className="hero__sub">
          Building responsive, high-performance web applications. Passionate about clean code, modern UI/UX, and continuous learning.
        </p>
        <div className="hero__actions">
          <button
            className="btn btn--primary"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </button>
          <a href="mailto:surajghodke8888@gmail.com" className="btn btn--outline">Get In Touch</a>
        </div>
        <div className="hero__scroll-hint">
          <span></span>
        </div>
      </div>
      <div className={`hero__badge-cluster ${visible ? "hero__badge-cluster--visible" : ""}`}>
        {["React.js", "Node.js", "MongoDB", "Express.js", "TypeScript"].map((t, i) => (
          <span key={t} className="hero__badge" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>{t}</span>
        ))}
      </div>
    </section>
  );
}

function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" className="section about">
      <div className="container">
        <AnimatedSection>
          <span className="section__label">About Me</span>
          <h2 className="section__title">Crafting digital<br /><em>experiences</em> that matter.</h2>
        </AnimatedSection>
        <div ref={ref} className={`about__grid ${inView ? "about__grid--visible" : ""}`}>
          <div className="about__text">
            <p>
              I am a passionate <strong>MERN Stack Web Developer</strong> with a strong foundation in building modern, responsive, and scalable web applications. I specialize in developing full-stack solutions using MongoDB, Express.js, React.js, and Node.js, along with deep knowledge of HTML, CSS, JavaScript (ES6+).
            </p>
            <p>
              I enjoy transforming ideas into real-world applications by writing clean, efficient, and maintainable code. I have experience working with RESTful APIs, handling backend logic, managing databases, and creating intuitive user interfaces.
            </p>
            <p>
              As a continuous learner, I stay updated with the latest web technologies and best practices — eager to collaborate with teams and deliver impactful digital solutions.
            </p>
            <div className="about__traits">
              {["Problem-solving", "Teamwork", "Attention to detail", "Communication"].map(t => (
                <span key={t} className="about__trait">{t}</span>
              ))}
            </div>
          </div>
          <div className="about__info-card">
            <div className="about__avatar">SG</div>
            <ul className="about__details">
              <li><FaMapMarkerAlt className="about__icon" /><span>Dharashiv, Maharashtra, India</span></li>
              <li><FaPhone className="about__icon" /><span>+91 9657610745</span></li>
              <li><FaEnvelope className="about__icon" /><a href="mailto:surajghodke8888@gmail.com">surajghodke8888@gmail.com</a></li>
              <li><FaLinkedin className="about__icon" /><a href="https://www.linkedin.com/in/suraj-laxman-ghodke/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><FaGithub className="about__icon" /><a href="https://github.com/SLG179" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
            <div className="about__exp-badge">
              <strong>1+</strong>
              <span>Year of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [active, setActive] = useState("Frontend");

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <AnimatedSection>
          <span className="section__label">Core Skills</span>
          <h2 className="section__title">Technologies I<br /><em>work with</em></h2>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <div className="skills__tabs">
            {Object.keys(SKILLS).map(cat => (
              <button
                key={cat}
                className={`skills__tab ${active === cat ? "skills__tab--active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="skills__grid">
            {SKILLS[active].map((skill, i) => (
              <div
                key={skill}
                className="skills__card"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="skills__card-icon">{SKILL_ICONS[skill]}</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <AnimatedSection>
          <span className="section__label">Selected Projects</span>
          <h2 className="section__title">Things I've<br /><em>built</em></h2>
        </AnimatedSection>
        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 120}>
              <div className="project-card">
                <div className="project-card__number">0{i + 1}</div>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="project-card__actions">
                  <a href={p.live} className="project-card__link project-card__link--primary" target="_blank" rel="noreferrer">
                    Visit Site <span>↗</span>
                  </a>
                  <a href={p.repo} className="project-card__link" target="_blank" rel="noreferrer">
                    View Repository <span>→</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <AnimatedSection>
          <span className="section__label">Background</span>
          <h2 className="section__title">Education &<br /><em>Experience</em></h2>
        </AnimatedSection>
        <div className="edu__grid">
          <div className="edu__col">
            <AnimatedSection delay={100}>
              <h3 className="edu__col-title">Education</h3>
              <div className="timeline">
                <div className="timeline__item">
                  <div className="timeline__dot"></div>
                  <div className="timeline__content">
                    <span className="timeline__date">June 2025</span>
                    <h4>B.Tech — Electronics & Telecommunication</h4>
                    <p>DBATU University, Terna College of Engineering, Dharashiv</p>
                  </div>
                </div>
                <div className="timeline__item">
                  <div className="timeline__dot"></div>
                  <div className="timeline__content">
                    <span className="timeline__date">Summer 2022</span>
                    <h4>Diploma — Electronics & Telecommunication</h4>
                    <p>MSBTE, Government Polytechnic College, Dharashiv</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="edu__col">
            <AnimatedSection delay={200}>
              <h3 className="edu__col-title">Work Experience</h3>
              <div className="timeline">
                <div className="timeline__item">
                  <div className="timeline__dot timeline__dot--accent"></div>
                  <div className="timeline__content">
                    <span className="timeline__date">May 2025 – Oct 2025</span>
                    <h4>MERN Stack Web Developer Intern</h4>
                    <p>Skillected Edu. Pvt. Ltd.</p>
                  </div>
                </div>
              </div>
              <h3 className="edu__col-title" style={{ marginTop: "2.5rem" }}>Certifications</h3>
              <ul className="cert__list">
                {CERTS.map(c => (
                  <li key={c.name}>
                    <a href={c.link} target="_blank" rel="noreferrer" className="cert__link">
                      <span className="cert__icon">↗</span>
                      <span>{c.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <AnimatedSection>
          <span className="section__label">Get In Touch</span>
          <h2 className="section__title contact__title">
            Available for freelance<br />or <em>full-time roles.</em>
          </h2>
          <p className="contact__sub">Feel free to reach out — I'd love to connect and discuss opportunities.</p>
          <div className="contact__actions">
            <a href="mailto:surajghodke8888@gmail.com" className="btn btn--primary btn--lg">
              Send Email
            </a>
            <a href="https://www.linkedin.com/in/suraj-laxman-ghodke/" target="_blank" rel="noreferrer" className="btn btn--outline btn--lg">
              LinkedIn
            </a>
            <a href="https://github.com/SLG179" target="_blank" rel="noreferrer" className="btn btn--outline btn--lg">
              GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <span className="footer__logo">SG</span>
          <p>Built with React • © {new Date().getFullYear()} Suraj Ghodke</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
