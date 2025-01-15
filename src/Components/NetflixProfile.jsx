import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const NetflixProfile = function () {
  return (
    <Container fluid className="bg-dark text-white py-5">
      <h4 className="text-secondary">Edit profile</h4>
      <Row>
        <Col xs={0} md={3}></Col>
        <Col xs={5} md={3}>
          <div className="text-center">
            <img src="./assets/avatar.png" alt="Avatar" className="w-50" />
          </div>
        </Col>
        <Col xs={6} md={3} className="text-md-start pe-5">
          <Form>
            <FormControl
              type="text"
              placeholder="Enter name"
              className="bg-secondary rounded-0 mt-3"
            />
          </Form>

          <div className="my-4">
            <h4 className="text-secondary">Language:</h4>
            <DropdownButton
              id="dropdownGenres"
              title="Language"
              variant="secondary"
              className="rounded-0"
            >
              <Dropdown.Item href="#">English</Dropdown.Item>
              <Dropdown.Item href="#">Spanish</Dropdown.Item>
              <Dropdown.Item href="#">Italian</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
        <Col xs={1} md={3}></Col>
      </Row>
      <hr></hr>
      <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={3}>
          <p className="text-secondary text-md-center"> Maturity Settings:</p>
        </Col>
        <Col xs={12} md={3} className="text-lg-start pe-5">
          <Button variant="dark" className="rounded-0">
            <h6 className="fw-bold">ALL MATURITY SETTINGS</h6>
          </Button>
          <p className="pt-2 text-white">
            Shows files for all maturity settings for this profile
          </p>
          <Button
            variant="outline-secondary"
            className="rounded-0 text-secondary"
          >
            EDIT
          </Button>
        </Col>
        <Col xs={1} md={3}></Col>
      </Row>
      <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={3}>
          <p className="text-secondary text-md-center">Autoplay Controls:</p>
        </Col>
        <Col xs={12} md={3} className="text-lg-start pe-5">
          <Form.Check
            type="checkbox"
            id="autoplay1"
            label="Autoplay next episode in a series on all devices"
            className="mt-2"
          />
          <Form.Check
            type="checkbox"
            id="autoplay2"
            label="Autoplay previews while browsing on all devices"
            defaultChecked
            className="mt-2"
          />
        </Col>
        <Col xs={12} md={3}></Col>
      </Row>
      <hr></hr>
      <Row>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4}>
          <div className="d-lg-flex justify-content-center">
            <Button
              variant="outline-secondary"
              className="rounded-0 my-1 mx-lg-2"
            >
              Save
            </Button>
            <Button
              variant="outline-secondary"
              className="rounded-0 my-1 mx-lg-2"
            >
              Cancel
            </Button>
            <Button
              variant="outline-secondary"
              className="rounded-0 my-1 mx-lg-2"
            >
              Delete Profile
            </Button>
          </div>
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  );
};

export default NetflixProfile;
