import { Container, Row, Col, Button } from "react-bootstrap";

const NetflixSettings = () => {
  return (
    <Container fluid className="bg-dark text-white py-5">
      <Row>
        <h4 className="text-secondary">Account</h4>
        <hr className="text-secondary" />
        <Col xs={12} md={4}>
          <div className="ms-lg-3">
            <p className="text-secondary">MEMBERSHIP & BILLING</p>
            <Button
              variant="outline-secondary"
              className="rounded-0 text-secondary"
            >
              Cancel Membership
            </Button>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <p className="fw-bold">Rachele@Barberis.com</p>
          <p className="text-secondary">Password ********</p>
          <p className="text-secondary">Phone *****680</p>
        </Col>
        <Col xs={12} md={4} className="text-md-end pe-5">
          <p className="text-secondary">Change Account Email</p>
          <p className="text-secondary">Change Password</p>
          <p className="text-secondary">Change Phone Number</p>
          <p className="text-secondary">Update payment info Billing Details</p>
          <p className="text-secondary">Redeem gift card or promo code</p>
          <p className="text-secondary">Where to buy gift cards?</p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col xs={12} md={4}>
          <p className="text-secondary ps-lg-3">PLAN DETAILS</p>
        </Col>
        <Col xs={12} md={4} className="d-flex flex-direction-row">
          <p className="fw-bold">Standard </p>
          <i className="bi bi-badge-hd fs-6 ps-1"></i>
        </Col>
        <Col xs={12} md={4} className="text-lg-end pe-5">
          <p className="text-secondary">Change Plane</p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col xs={12} md={4}>
          <p className="text-secondary ms-lg-3">SETTINGS</p>
        </Col>
        <Col xs={12} md={4}>
          <p className="text-secondary">Parental Controls</p>
          <p className="text-secondary">Test participation</p>
          <p className="text-secondary">Manage download devices</p>
        </Col>
        <Col xs={12} md={4} className="text-start">
          <p className="text-secondary">Activate a device</p>
          <p className="text-secondary">Recent device streaming activity</p>
          <p className="text-secondary">Singout all devices</p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col xs={12} md={4}>
          <p className="text-secondary ms-lg-3">MY PROFILE</p>
        </Col>
        <Col xs={12} md={4} className="d-flex flex-direction-row">
          <img
            src="./public/assets/avatar.png"
            alt="imgprofile"
            className="w-25"
          />
          <p className="fw-bold pt-4 ps-2">Rachele Barberis</p>
        </Col>
        <Col xs={12} md={4} className="text-start">
          <p className="text-secondary">Manage Profile</p>
          <p className="text-secondary">Add profile email</p>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4}>
          <p className="text-secondary">Language</p>
          <p className="text-secondary">Playback settings</p>
          <p className="text-secondary">Subtitle Apperance</p>
        </Col>
        <Col xs={12} md={4} className="text-start">
          <p className="text-secondary">Viewing activity</p>
          <p className="text-secondary">Ratings</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NetflixSettings;
