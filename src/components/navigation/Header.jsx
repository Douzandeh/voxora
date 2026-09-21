import "./navigation.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  return (
    <header>
      <Container>
        <Navbar collapseOnSelect expand="lg" className=" mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Voxora</Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Voxora
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="m-auto">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Shop</Nav.Link>
                  <Nav.Link href="#action2">About us</Nav.Link>
                  <Nav.Link href="#action2">Blog</Nav.Link>
                  <Nav.Link href="#action2">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className="d-flex align-items-center header-action">
              <span className="text-white pe-2 pe-md-3 me-2 me-md-3 border-end">
                <i className="bi bi-person me-1 "></i>
                <span className="d-none d-sm-inline-block">Login</span>
              </span>
              <span className="me-1 me-md-3 text-white">
                <i className="bi bi-search me-1 "></i>
                <span className="d-none d-sm-inline-block">Search</span>
              </span>
              <Navbar.Toggle className="ms-3" aria-controls={`offcanvasNavbar-expand-lg`} />
            </div>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
