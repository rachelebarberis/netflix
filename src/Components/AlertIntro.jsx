import { Alert, Container, Row, Col } from "react-bootstrap";
const AlertIntro = () => {
  return (
    <Container fluid={true} className="bg-dark">
      <Row>
        <Col xs={1} md={3}></Col>
        <Col xs={10} md={6}>
          <Alert variant="dark">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              To proceed with using the application, press on TV show and search
              for the right film for you
            </p>
            <hr />
            <p className="mb-0">
              Click on Tv Show in the bar above and immerse yourself in the
              fantastic world of movies. Have a good time
            </p>
          </Alert>
        </Col>
        <Col xs={1} md={3}></Col>
      </Row>
    </Container>
  );
};
export default AlertIntro;
