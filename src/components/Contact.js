import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    user_name: '',
    user_email: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  // ✅ NEW EmailJS function
  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formDetails,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then(() => {
        setStatus({ success: true, message: 'Message sent successfully ✅' });
        setButtonText("Send");
        setFormDetails(formInitialDetails);
      })
      .catch((error) => {
        console.log(error);
        setStatus({ success: false, message: 'Something went wrong ❌' });
        setButtonText("Send");
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact illustration"
                />
              }
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                  <h2>Get In Touch</h2>

                  <form onSubmit={handleSubmit}>
                    <Row className="g-3">

                      <Col xs={12}>
                        <input
                          type="text"
                          name="user_name"
                          className="form-input"
                          placeholder="Your Name"
                          value={formDetails.user_name}
                          onChange={(e) => onFormUpdate('user_name', e.target.value)}
                          required
                        />
                      </Col>

                      <Col xs={12}>
                        <input
                          type="email"
                          name="user_email"
                          className="form-input"
                          placeholder="Your Email"
                          value={formDetails.user_email}
                          onChange={(e) => onFormUpdate('user_email', e.target.value)}
                          required
                        />
                      </Col>

                      <Col xs={12}>
                        <textarea
                          rows="5"
                          name="message"
                          className="form-textarea"
                          placeholder="Write your message..."
                          value={formDetails.message}
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        />
                      </Col>

                      <Col xs={12} className="text-center">
                        <button type="submit" className="form-btn">
                          {buttonText}
                        </button>
                      </Col>

                      {
                        status.message &&
                        <Col xs={12}>
                          <p className={status.success ? "success" : "danger"}>
                            {status.message}
                          </p>
                        </Col>
                      }

                    </Row>
                  </form>

                </div>
              }
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  )
}