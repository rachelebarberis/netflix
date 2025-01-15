import { Container, Navbar, Nav } from "react-bootstrap";
const NetflixNav = function () {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Container>
        <Navbar.Brand href="#">
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <i className="bi bi-search icons text-white"></i>
            <div id="kids" className="fw-bold ms-3 text-white">
              KIDS
            </div>
            <i className="bi bi-bell icons ms-3 text-white"></i>
            <i className="bi bi-person-circle icons ms-3 text-white"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NetflixNav;
