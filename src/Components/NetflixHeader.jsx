import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
const NetflixHeader = function () {
  return (
    <Container fluid={true} className="bg-dark">
      <Row className="justify-content-between">
        <Col className="d-flex">
          <h2 className="mb-4 text-white">TV Shows</h2>
          <div className="ms-4 mt-2">
            <DropdownButton
              variant="secondary"
              size="sm"
              title="Genres"
              className="bg-secondary"
            >
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
        <Col className="d-flex justify-content-end  mt-1 fs-3">
          <i className="bi bi-list text-secondary"></i>
          <i className="bi bi-grid-3x3-gap text-secondary"></i>
        </Col>
      </Row>
    </Container>
  );
};
export default NetflixHeader;
