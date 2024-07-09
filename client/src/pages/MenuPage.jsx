import React from "react";
import NavBar from "../components/Navbar";
import { Col, Row } from "react-bootstrap";
import Personaladd from "../components/Personaladd";
import { Link } from "react-router-dom";
import "./menu.css";
import Footer from '../components/Footer';

function MenuPage() {
  return (
    <div>
      <NavBar />
      {/* <div className="banner1">
      </div> */}
      <div className="container mt-5 ">
        <Row>
          {/* <Col md={12}>
            <div className="float-end">
              <div className="btn btn-danger rounded-circle p-3 mb-5 ">
                channel <br /> profile
              </div>
            </div>
          </Col> */}
          <Col>
            <div className="d-flex flex-column flex-md-row justify-content-around">
            <Link to={'/promotion'}>
                  <button className="btn btn-secondary rounded-pill p-3 px-5 mb-3 col-12 col-md-auto">
                    Get Channel Promotion
                  </button>
            </Link>
            <Link to={'/vidiopromotion'}>
              <button className="btn btn-secondary rounded-pill p-3 mb-3 px-5 col-12 col-md-auto">
                Get Video Promotion
              </button>
              </Link>
            </div>
            {/* <div className="mt-5">
              <div className="text-center">
                <h2> Promotional Policy</h2>
              </div>
              <div className="d-flex justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                    disabled
                  />
                  <label class="form-check-label" for="">
                    {" "}
                    Agreed with policy{" "}
                  </label>
                  
                </div>
              </div>
            </div> */}
          </Col>
        </Row>
        <div>
          <Personaladd />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MenuPage;
