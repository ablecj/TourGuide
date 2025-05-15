import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import Logo from '../assets/Logo/logo.png';


const Header = () => {
  // state to track the scroll
  const [scrolledPast, setScrolledPast] = useState(false);

  // useEffect to track the sideEffects
  useEffect(()=> {
    // tracking the scroll
    const handleScroll = () => {
      const offset =  window.scrollY;
      if (offset > 370) {
        setScrolledPast(true);
      } else {
        setScrolledPast(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);

  }, [])



  return (
    <>
    {['lg'].map((expand) => (
      <Navbar key={expand} expand={expand} sticky="top"  
      className={`custom-navbar ${scrolledPast ? "navbar-transparent" : "navbar-white"} `}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              alt="Logo"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="brand_name" id={`offcanvasNavbarLabel-expand-${expand}`}>
                Travelinds Tours
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto pe-3">
                <Nav.Link href="/" className="Nav_link">Home</Nav.Link>
                <Nav.Link href="/TourPackage" className="Nav_link">Tour Packages</Nav.Link>
                <Nav.Link href="#Destinations" className="Nav_link">Destinations</Nav.Link>
                <Nav.Link href="#About" className="Nav_link">About</Nav.Link>
                <Nav.Link href="/Contact" className="Nav_link">Contact Us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  );
};

export default Header;
