import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import Personaladd from "../components/Personaladd";
import Footer from '../components/Footer';
import "./menu.css";

function MenuPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Container className="flex-grow-1 my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h1 className="text-center mb-5">Promotion Services</h1>
            <div className="d-grid gap-4">
              <Link to="/promotion" className="text-decoration-none">
                <Button variant="primary" size="lg" className="w-100 py-3">
                  Channel Promotion
                </Button>
              </Link>
              <Link to="/vidiopromotion" className="text-decoration-none">
                <Button variant="secondary" size="lg" className="w-100 py-3">
                  Video Promotion
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Personaladd />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default MenuPage;