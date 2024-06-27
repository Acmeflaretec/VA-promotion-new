import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import frontImage from '../assets/MainLogo.png';
import backImage from '../assets/logowtext.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="p-1 bg-primary-subtle">
      <Container>
       <Link to={'/'}>
            <Navbar.Brand className="d-flex align-items-center">
              <div className="logo-container">
                <div className="logo" style={{ width: '100px' }}>
                  <img src={frontImage} alt="Front Logo" className="front" />
                  <img src={backImage} alt="Back Logo" className="back" />
                </div>
              </div>
            </Navbar.Brand>
       </Link>
          <Nav className="me-auto d-flex justify-content-center w-100">
            <h1 className="fw-bold display-4 text-center m-0">
              VA'S CHANNEL PROMOTION
            </h1>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
