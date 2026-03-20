// import github from "../assets/img/nav-icon4.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { CircularMeter } from "./CircularMeter";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Proficient in C++, Python, and JavaScript with hands-on experience in modern web technologies, building interactive GUI applications and responsive web interfaces.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <CircularMeter value={85} />
                  <h5>C++</h5>
                </div>

                <div className="item">
                  <CircularMeter value={80} />
                  <h5>Python</h5>
                </div>

                <div className="item">
                  <CircularMeter value={75} />
                  <h5>JavaScript</h5>
                </div>

                <div className="item">
                  <CircularMeter value={75} />
                  <h5>React.js</h5>
                </div>

                <div className="item">
                  <CircularMeter value={85} />
                  <h5>HTML & CSS</h5>
                </div>

                <div className="item">
                  <CircularMeter value={70} />
                  <h5>Git & GitHub</h5>
                </div>

                <div className="item">
                  <CircularMeter value={60} />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" alt="React skill icon" src={colorSharp}  />
    </section>
  )
}
