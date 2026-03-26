import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ochi from "../assets/img/ochi.png";
import rps from "../assets/img/rps.png";
import ttt from "../assets/img/ttt.png";
import currconv from "../assets/img/currconv.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const personal = [
    {
      title: "Sorting-Visualiser",
      description: "Design & Development",
      imgUrl: projImg2,
      projurl: "https://github.com/AyushRaj1329/SFML-Sorting-Visualiser/",
    },


  ];

  const freelance = [
    {
      title: "Card-Sequence Validator",
      description: "Design & Development",
      imgUrl: projImg1,
      projurl: "https://github.com/AyushRaj1329/Dual-Head-Card-Sequence-Validator/",
    },

    {
      title: "OMP-Portfolio",
      description: "Design & Development",
      imgUrl: projImg3,
      projurl: "https://www.omprakashassociates.com",
    },

  ];

  const learning = [
    {
      title: "Frontend Clone",
      description: "React Understanding",
      imgUrl: ochi,
      projurl: "https://ochi-website-clone-seven.vercel.app/",
    },

    {
      title: "Currency-Converter",
      description: "API Understanding",
      imgUrl: currconv,
      projurl: "https://ayushraj1329.github.io/Currency-Converter/",
    },

    {
      title: "Stone Paper Scissors",
      description: "JavaScript Understanding",
      imgUrl: rps,
      projurl: "https://ayushraj1329.github.io/stone-paper-scissors-/",
    },

    {
      title: "Tic Tac Toe",
      description: "JavaScript Understanding",
      imgUrl: ttt,
      projurl: "https://ayushraj1329.github.io/tic-tac-toe/",
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>A collection of projects that showcase my skills in software development, problem-solving, and building real-world applications. From interactive visual tools to industry-focused systems, each project reflects my ability to design, develop, and deliver efficient solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="second">Freelance Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Learning</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            personal.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>

                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            freelance.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            learning.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>

                      </Tab.Pane>




                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="Project" src={colorSharp2}></img>
    </section>
  )
}
