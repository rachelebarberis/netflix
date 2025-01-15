import { Container, Row, Col, Button } from "react-bootstrap";
const NetflixFooter = function () {
  return (
    <Container fluid={true} className="bg-dark">
      <Row className="justify-content-center">
        <Col xs={6} className="text-center mb-2 text-secondary">
          <i className="bi bi-facebook footer-icon me-2"></i>
          <i className="bi bi-instagram footer-icon me-2"></i>
          <i className="bi bi-twitter footer-icon me-2"></i>
          <i className="bi bi-youtube footer-icon"></i>
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center">
        <Col md={3}></Col>
        <Col md={6}>
          <Row>
            <Col md={3}>
              <div>
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Media Center
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Privacy
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Contact us
                  </a>
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-links">
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Audio Description
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Legal Notices
                  </a>
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-links">
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Help Center
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Jobs
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Cookie Preferences
                  </a>
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-links">
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    alt="footer link"
                    className="fs-6 text-secondary text-decoration-none"
                  >
                    Corporate Information
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col xs="auto" className="text-center mt-3">
              <Button variant="secondary" size="sm" className="rounded-0">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row className="">
            <Col xs="auto" className="text-center mt-2 text-secondary">
              <p className="copyright">© 1997-2023 Netflix, Inc.</p>
            </Col>
          </Row>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default NetflixFooter;
