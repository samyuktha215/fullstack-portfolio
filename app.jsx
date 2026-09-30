const { useEffect, useMemo, useState } = React;

const portfolio = {
  name: "SAMYUKTHA BASAM",
  role: "Full Stack Developer",
  location: "Sweden",
  email: "samyuktha.basam@gmail.com",
  github: "https://github.com/samyuktha215",
  linkedin: "https://www.linkedin.com/in/samyuktha-basam",
  resume: "/resume.pdf",
};

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "JSX", "React"],
  Backend: ["Java", "Spring Boot", "Spring Security", "REST APIs", "Maven"],
  Database: ["MySQL", "PostgreSQL", "MongoDB", "JPA", "Hibernate"],
  "DevOps & Cloud": ["Docker", "Git", "GitHub", "GitHub Actions", "CI/CD", "Cloud"],
  Security: ["JWT", "OAuth", "Authentication", "Authorization", "RBAC", "CORS"],
};

const projects = [
  {
    title: "Secure Authentication & Authorization System",
    category: "Security · Full Stack",
    description:
      "A secure authentication and authorization system for a web application, using roles and permissions to control access to protected functionality.",
    stack: ["Java", "Spring Boot", "Spring Security", "React", "JWT", "OAuth", "MySQL", "Docker"],
    architecture: "React + JSX → REST API → Spring Boot → Spring Security → JWT / OAuth → MySQL",
    details: [
      "JWT-based authentication for stateless API requests.",
      "OAuth support for external identity providers.",
      "Role- and permission-based authorization.",
      "Admin functionality and frontend role-based visibility.",
      "CORS configuration and secure API endpoints.",
      "Docker-based deployment and GitHub Actions CI/CD."
    ],
    github: "https://github.com/samyuktha215/recipesite",
    demo: "https://project216.netlify.app/"
  },
  {
    title: "Optimal Liljeholmen Weather",
    category: "Java · APIs",
    description:
      "A Spring Boot application that integrates weather forecast services and selects a suitable forecast according to defined criteria.",
    stack: ["Java", "Spring Boot", "REST APIs", "WebClient", "Thymeleaf", "JSON"],
    architecture: "Weather APIs → Spring Boot → Weather Processing → Forecast Selection → REST API / UI",
    details: [
      "Integration with external weather forecast services.",
      "Forecast comparison and selection logic.",
      "REST endpoint for forecast data.",
      "Thymeleaf web interface.",
      "Temperature, humidity and forecast timestamp presentation."
    ],
    github: "https://github.com/samyuktha215/WeatherForecast_Docker",
    demo: "[LIVE DEMO]"
  }
];

const posts = [
  {
    category: "Security",
    title: "Understanding JWT Authentication with Spring Security",
    description: "A practical look at stateless authentication, tokens, protected endpoints and the request flow.",
    date: "Coming soon",
    time: "6 min read",
    content: "This article explains how JWT authentication works with Spring Security in a full-stack application. It covers stateless authentication, JWT token validation, protected REST APIs, role-based authorization, CORS, and OAuth.",
    article: "In my project, I implemented JWT-based authentication with Spring Security to protect REST APIs and manage user access based on roles and permissions. The backend validates the JWT token on protected requests, while the React frontend displays functionality according to the authenticated user's role."
  },

  {
    category: "Backend",
    title: "Designing a Clean Spring Boot API",
    description: "A practical approach to structuring controllers, services, repositories and DTOs.",
    date: "Coming soon",
    time: "5 min read",
    content: "A clean backend structure makes a Spring Boot application easier to understand, test and maintain as it grows.",
    article: "In my backend projects, I separate responsibilities between controllers, services and data-access components. Controllers handle HTTP requests, services contain business logic, and repositories handle communication with the database. DTOs are used to control the data exposed through the API."
  },

  {
    category: "DevOps",
    title: "From GitHub Actions to Docker Deployment",
    description: "How a small CI/CD pipeline can automate building, testing and packaging an application.",
    date: "Coming soon",
    time: "7 min read",
    content: "CI/CD can simplify the process of building, testing and deploying an application whenever changes are pushed to a repository.",
    article: "For my project, I used GitHub Actions to automate the development pipeline. The workflow can build the application, run tests and prepare it for deployment. Docker was used to package the application and its environment so it can run consistently across different environments."
  }
];

function Icon({ name, size = 18 }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 3.7 5.1 5.1 0 0 0 19.2.1S18 0 15 2a13.4 13.4 0 0 0-7 0C5 0 3.8.1 3.8.1a5.1 5.1 0 0 0-.1 3.6A5.5 5.5 0 0 0 2.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4.2-1.5"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    external: <><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    spark: <><path d="m12 3-1.3 5.7L5 10l5.7 1.3L12 17l1.3-5.7L19 10l-5.7-1.3L12 3Z"/><path d="m19 16-.6 2.4L16 19l2.4.6L19 22l.6-2.4L22 19l-2.4-.6L19 16Z"/></>
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="nav-inner">
        <button className="brand" onClick={() => go("home")} aria-label="Go to home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>{portfolio.name}</span>
        </button>
        <nav className={`nav-links ${open ? "nav-links--open" : ""}`}>
          {["home","about","skills","experience","projects","blog","contact"].map(id =>
            <button key={id} onClick={() => go(id)}>{id[0].toUpperCase()+id.slice(1)}</button>
          )}
          <a className="nav-resume" href={portfolio.resume} download><Icon name="download" size={15}/> Resume</a>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}

function Background() {
  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-bg" />
      <div className="scanline" />
    </>
  );
}

function Hero() {
  const [line, setLine] = useState(0);
  const lines = [
    "$ whoami",
    "> Full Stack Developer",
    "$ location",
    "> Sweden",
    "$ stack",
    "> Java · Spring Boot · React · Docker",
    "$ status",
    "> Open to opportunities"
  ];

  useEffect(() => {
    const timer = setInterval(() => setLine(v => Math.min(v + 1, lines.length)), 420);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero section">
      <div className="hero-copy reveal visible">
        <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
        <h1>Building software<br/><span>that moves ideas forward.</span></h1>
        <p className="hero-sub">
          I'm <strong>{portfolio.name}</strong>, a Full Stack Developer based in Sweden.
          I build modern, secure and scalable web applications across the frontend and backend.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => document.getElementById("projects").scrollIntoView({behavior:"smooth"})}>
            View my work <Icon name="arrow" />
          </button>
          <button className="btn btn-ghost" onClick={() => document.getElementById("contact").scrollIntoView({behavior:"smooth"})}>
            Let's connect
          </button>
          <a className="btn btn-ghost" href={portfolio.resume} download><Icon name="download" /> Resume</a>
        </div>
        <div className="hero-socials">
          <a href={portfolio.github} aria-label="GitHub"><Icon name="github" /></a>
          <a href={portfolio.linkedin} aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href={`mailto:${portfolio.email}`} aria-label="Email"><Icon name="mail" /></a>
        </div>
      </div>

      <div className="hero-visual reveal visible">
        <div className="orb orb-a" /><div className="orb orb-b" />
        <div className="terminal glass">
          <div className="terminal-bar">
            <div className="terminal-dots"><i/><i/><i/></div>
            <span>developer@portfolio:~</span>
            <span className="terminal-lock">●</span>
          </div>
          <div className="terminal-body">
            {lines.slice(0, line).map((item, i) =>
              <div key={i} className={item.startsWith(">") ? "terminal-output" : "terminal-command"}>
                {item}
              </div>
            )}
            <span className="cursor" />
          </div>
        </div>
        <div className="floating-chip chip-one">JAVA</div>
        <div className="floating-chip chip-two">SPRING</div>
        <div className="floating-chip chip-three">REACT</div>
        <div className="floating-chip chip-four">DOCKER</div>
      </div>
    </section>
  );
}

function TechStrip() {
  const tech = ["Java","Spring Boot","Spring Security","React","JSX","JavaScript","HTML","CSS","MySQL","Docker","Git","REST APIs","JWT","OAuth"];
  return (
    <div className="tech-strip">
      <div className="tech-track">
        {[...tech, ...tech].map((x,i) => <span key={i}><b>✦</b>{x}</span>)}
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="01 / ABOUT" title="Engineer mindset. Human curiosity." text="A little context behind the code." />
      <div className="about-grid">
        <div className="about-main glass reveal">
          <div className="code-label"><Icon name="code" size={16}/> /about-me</div>
          <p>I have a background in <strong>Electrical Engineering</strong> and completed my bachelor's degree in India. After my education, I worked as a Java Developer in India.</p>
          <p>Later, I moved to Sweden, where I started learning Swedish and continued developing my technical skills through further education in <strong>Java Development</strong> and <strong>Cloud Development</strong>.</p>
          <p>Through my studies and LIA experience, I gained practical experience across both backend and frontend development — from secure APIs and databases to interactive interfaces.</p>
          <div className="about-note">
            <Icon name="spark" size={20}/>
            <span>I enjoy understanding how systems work, solving technical problems and continuously learning new technologies.</span>
          </div>
        </div>
        <div className="about-side">
          <div className="mini-card glass reveal"><span>01</span><strong>Problem solver</strong><p>Break complex requirements into practical, maintainable solutions.</p></div>
          <div className="mini-card glass reveal"><span>02</span><strong>Full stack thinking</strong><p>Connect frontend experiences with APIs, business logic and data.</p></div>
          <div className="mini-card glass reveal"><span>03</span><strong>Continuous learner</strong><p>Keep exploring tools, patterns and technologies that improve my work.</p></div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <SectionHeading eyebrow="02 / TECH STACK" title="Tools I build with." text="A practical stack spanning interfaces, services, data and delivery." />
      <div className="skills-grid">
        {Object.entries(skills).map(([group, items], idx) =>
          <div className="skill-card glass reveal" key={group}>
            <div className="skill-number">0{idx+1}</div>
            <h3>{group}</h3>
            <div className="skill-tags">{items.map(s => <span key={s}>{s}</span>)}</div>
          </div>
        )}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading eyebrow="03 / EXPERIENCE" title="Where I've been building." text="Professional and practical software development experience." />
      <div className="timeline">
        <article className="timeline-item reveal">
          <div className="timeline-marker">01</div>
          <div className="timeline-content glass">
            <div className="timeline-meta"><span>Java Development</span><span>[2023-2024]</span></div>
            <h3>Java Developer — India, Sweden</h3>
            <p>Worked with Java development and backend application development, solving technical problems and building software solutions.</p>
            <div className="skill-tags compact"><span>Java</span><span>Backend</span><span>Problem Solving</span></div>
          </div>
        </article>
        <article className="timeline-item reveal">
          <div className="timeline-marker">02</div>
          <div className="timeline-content glass">
            <div className="timeline-meta"><span>LIA / Software Development</span><span>[2024-2026]</span></div>
            <h3>Full Stack Development — Sweden</h3>
            <p>Practical development experience across backend and frontend, including secure authentication, APIs, database integration, UI development and containerized delivery.</p>
            <div className="skill-tags compact"><span>Spring Boot</span><span>React</span><span>MySQL</span><span>Docker</span><span>JWT</span><span>OAuth</span></div>
          </div>
        </article>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card glass reveal">
      <div className="project-top">
        <span className="project-index">0{projects.indexOf(project)+1}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <div className="project-visual">
        <div className="architecture-mini">
          {project.title.includes("Authentication")
            ? <><span>CLIENT</span><i>→</i><span>API</span><i>→</i><span>SECURITY</span><i>→</i><span>DB</span></>
            : <><span>WEATHER API</span><i>→</i><span>SPRING</span><i>→</i><span>FORECAST</span></>}
        </div>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="skill-tags compact">{project.stack.slice(0,6).map(x => <span key={x}>{x}</span>)}</div>
      <button className="text-link" onClick={() => onOpen(project)}>Explore project <Icon name="arrow" size={16}/></button>
    </article>
  );
}

function Projects() {
  const [active, setActive] = useState(null);
  return (
    <section id="projects" className="section section-alt">
      <SectionHeading eyebrow="04 / SELECTED WORK" title="Things I've built." text="A selection of projects that show how I approach real problems." />
      <div className="projects-grid">
        {projects.map(p => <ProjectCard key={p.title} project={p} onOpen={setActive} />)}
      </div>
      <div className="coming-soon glass reveal">
        <span>+</span>
        <div><strong>More projects coming soon.</strong><p>The project system is ready for future work, experiments and case studies.</p></div>
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const esc = e => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <div className="project-modal glass">
        <button className="modal-close" onClick={onClose}><Icon name="close"/></button>
        <div className="eyebrow">{project.category}</div>
        <h2>{project.title}</h2>
        <p className="modal-lead">{project.description}</p>
        <div className="modal-architecture">
          <span>ARCHITECTURE</span>
          <strong>{project.architecture}</strong>
        </div>
        <h4>Key features</h4>
        <ul className="feature-list">{project.details.map(x => <li key={x}>{x}</li>)}</ul>
        <div className="skill-tags">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
        <div className="modal-actions">
          <a className="btn btn-primary" href={project.github}>GitHub <Icon name="github"/></a>
          <a className="btn btn-ghost" href={project.demo}>Live demo <Icon name="external"/></a>
        </div>
      </div>
    </div>
  );
}

function Process() {
  const items = [
    ["01","Understand","Understand the problem, users and requirements."],
    ["02","Design","Think through architecture, APIs, data and security."],
    ["03","Build","Create clean, reusable and maintainable software."],
    ["04","Test","Validate functionality and handle edge cases."],
    ["05","Improve","Use feedback and learning to continuously improve."]
  ];
  return (
    <section className="section">
      <SectionHeading eyebrow="05 / APPROACH" title="How I build software." text="A simple process for turning requirements into reliable software." />
      <div className="process-grid">
        {items.map(([n,t,d]) => <div className="process-card glass reveal" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section section-alt">
      <SectionHeading eyebrow="06 / EDUCATION" title="Learning never stops." />
      <div className="education-grid">
        <div className="edu-card glass reveal"><span>01</span><h3>Bachelor's Degree</h3><p>Electrical Engineering</p><small>India · [2009-2013]</small></div>
        <div className="edu-card glass reveal"><span>02</span><h3>Java Development</h3><p>Professional development studies</p><small>Sweden · [2024-2026]</small></div>
        <div className="edu-card glass reveal"><span>03</span><h3>Cloud Development</h3><p>Professional development studies</p><small>Sweden · [2022-2024]</small></div>
      </div>
    </section>
  );
}

function Blog() {
  const [post, setPost] = useState(null);
  return (
    <section id="blog" className="section">
      <SectionHeading eyebrow="07 / BLOG" title="Notes from the build." text="Technical ideas, lessons and things worth sharing." />
      <div className="blog-grid">
        {posts.map((p,i) => <article className="blog-card glass reveal" key={p.title}>
          <div className="blog-image"><span>0{i+1}</span><Icon name="code" size={36}/></div>
          <div className="blog-meta"><span>{p.category}</span><span>{p.time}</span></div>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <button className="text-link" onClick={() => setPost(p)}>Read article <Icon name="arrow" size={16}/></button>
        </article>)}
      </div>
      {post && <BlogModal post={post} onClose={() => setPost(null)} />}
    </section>
  );
}

function BlogModal({ post, onClose }) {
  useEffect(() => {
    const esc = e => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <article className="article-modal glass">
        <button className="modal-close" onClick={onClose}><Icon name="close" /></button>
        <div className="eyebrow">{post.category} · {post.time}</div>
        <h2>{post.title}</h2>
        <p className="modal-lead">{post.description}</p>
        <div className="article-body">
          <p>{post.content}</p>

          <p>{post.article}</p>

          <div className="code-block">
            <span>// example</span><br />
            const idea = "build → test → learn → improve";<br />
            console.log(idea);
          </div>
        </div>
      </article>
    </div>
  );
}

function Resume() {
  return (
    <section id="resume" className="resume-section section">
      <div className="resume-card glass reveal">
        <div><div className="eyebrow">08 / RESUME</div><h2>Want the complete picture?</h2><p>Download my resume for a concise overview of my experience, education and technical skills.</p></div>
        <a className="btn btn-primary" href={portfolio.resume} download><Icon name="download"/> Download Resume</a>
      </div>
    </section>
  );
}

function Contact() {
  const submit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = `Portfolio contact from ${name}`;

    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    window.location.href =
      `mailto:${portfolio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="contact-grid">

        <div className="contact-copy reveal">
          <div className="eyebrow">09 / CONTACT</div>

          <h2>Let's build something together.</h2>

          <p>
            I'm open to opportunities as a Full Stack Developer or Java
            Developer and happy to connect.
          </p>

          <div className="contact-links">
            <a href={`mailto:${portfolio.email}`}>
              <Icon name="mail" />
              <span>{portfolio.email}</span>
            </a>

            <a href={portfolio.github}>
              <Icon name="github" />
              <span>GitHub</span>
            </a>

            <a href={portfolio.linkedin}>
              <Icon name="linkedin" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <form className="contact-form glass reveal" onSubmit={submit}>

          <label>
            Name
            <input
              name="name"
              required
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              required
              type="email"
              placeholder="you@example.com"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              required
              rows="6"
              placeholder="Tell me a little about your project or opportunity..."
            />
          </label>

          <button className="btn btn-primary" type="submit">
            Send message <Icon name="arrow" />
          </button>

        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top"><div><div className="brand-static"><span className="brand-mark">&lt;/&gt;</span>{portfolio.name}</div><p>Full Stack Developer · Sweden</p></div>
      <div className="footer-links"><a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#blog">Blog</a><a href="#contact">Contact</a></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {portfolio.name}. Built with passion for software.</span><span>HTML · CSS · JSX</span></div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <>
    <Background />
    <Navbar />
    <main>
      <Hero />
      <TechStrip />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Process />
      <Education />
      <Blog />
      <Resume />
      <Contact />
    </main>
    <Footer />
  </>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
