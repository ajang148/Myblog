import { Container, Nav, Navbar, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <div className='upper'>
      <Navbar expand="lg" className="bg-body-tertiary bg-lg">
        <Container className="justify-content-center">
          <Navbar.Brand as={Link} to="/">Uncharted Travels</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/stories">Stories</Nav.Link>
              <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
              <Nav.Link as={Link} to="/Visits">Visits</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/addstory">Add</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="d-flex align-items-center">
          {/* Search bar */}
          <Form className="d-flex me-3">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className='d-none d-lg-block'
              />
              <InputGroup.Text className='d-none d-lg-block'>sign in</InputGroup.Text>
            </InputGroup>
          </Form>
          {/* Social Media Icons */}
        </div>
      </Navbar>
    </div>
  );
}

export default Navbars;
