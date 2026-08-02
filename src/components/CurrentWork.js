import { useRef } from "react";
import { Col, Row } from "react-bootstrap";

// Add, remove, or edit entries here to update the "Currently Working On" section.
const ongoingProjects = [
  {
    title: "Dead Card Detector",
    status: "Testing & Refining",
    tech: "Arduino C/C++ • Adafruit_PN532 • NXP PN532",
    description:
      "Currently refining the mechanical design, improving hardware reliability, and integrating the detector with industrial machinery for real-world deployment.",
    url: "https://github.com/AyushRaj1329/Dead-Card-Detector",
    linkLabel: "View on GitHub",
  },
  {
    title: "Card Perso System",
    status: "Testing & Refining",
    tech: "Python",
    description:
      "Currently validating all software modules on the production machine, performing end-to-end system testing, and resolving issues to ensure stable and reliable operation.",
    url: "https://github.com/AyushRaj1329/Card-Perso-System",
    linkLabel: "View on GitHub",
  },
  {
    title: "Techware Automation Website and HRMS",
    status: "In Development",
    tech: "React.js • Node.js • PostgreeSQL ",
    description:
      "Currently developing a custom HRMS module and integrating it with the deployed company website to provide a unified platform for business operations and employee management.",
    url: "https://github.com/AyushRaj1329/Techware-Automation-Portfolio",
    linkLabel: "View on GitHub",
  },
  {
    title: "PC Based PLC Controller",
    status: "Planning & Design",
    tech: "Python",
    description:
      "Currently in the planning phase, gathering requirements, understanding industrial use cases, and defining the overall system architecture for future development.",
    url: "https://github.com/AyushRaj1329/PC-Based-PLC-Controller",
    linkLabel: "View on GitHub",
  }
];

// Project lifecycle stages, ordered from earliest to most mature.
// "Planning & Design"  - scoping, designing, deciding the approach; no build yet
// "In Development"     - actively being built, no release date fixed
// "Testing & Refining" - build complete, now testing and polishing before release
const statusStyles = {
  "Planning & Design": "status-badge status-planning",
  "In Development": "status-badge status-development",
  "Testing & Refining": "status-badge status-testing",
};

export const CurrentProject = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.querySelector(".projects-scroll-card")?.offsetWidth || 300;
    const distance = direction === "right" ? cardWidth + 24 : -(cardWidth + 24);
    const duration = 450; // ms
    const start = container.scrollLeft;
    const startTime = performance.now();

    // ease-in-out cubic
    const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      container.scrollLeft = start + distance * ease(progress);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12}>
            <h3>Currently Working On</h3>
            <p ></p>
          </Col>
        </Row>

        <div className="projects-scroll-wrapper">
          <button className="scroll-arrow scroll-arrow-left" onClick={() => scroll("left")} aria-label="Scroll left">
            &#8592;
          </button>

          <div className="projects-scroll-container" ref={scrollRef}>
            {ongoingProjects.map((project) => (
              <div className="projects-scroll-card" key={project.title}>
                <div className="current-project-details">
                  <div className="project-status">
                    <span className={statusStyles[project.status] || "status-badge"}>
                      {project.status}
                    </span>
                  </div>

                  <h4 className="current-project-title">{project.title}</h4>
                  <p className="current-project-tech">{project.tech}</p>
                  <p className="current-project-desc">{project.description}</p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="current-project-link"
                  >
                    {project.linkLabel} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-arrow scroll-arrow-right" onClick={() => scroll("right")} aria-label="Scroll right">
            &#8594;
          </button>
        </div>
      </div>
    </Col>
  );
};
