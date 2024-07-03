

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Col, Row } from "react-bootstrap";
import Personaladd from "../components/Personaladd";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css"; // Import your custom CSS for styling

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/payment/isactivevideo`);
        setVideos(response.data.data);
      } catch (error) {
        console.error("Failed to fetch videos", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Row>
          <Col md={12}>
            <div className="float-end p-5">
              <Link to={"/menu"}>
                <button className="btn btn-danger">Login with yt</button>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="video-container mb-5">
          {videos.map((video) => (
            <div key={video._id} className="video-item">
              <iframe
                src={`https://www.youtube.com/embed/${new URL(video.url).searchParams.get('v')}`}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="video-frame"
              ></iframe>
              {/* <h3 className="mt-4 text-center fw-bold">{video.name}</h3> */}
            </div>
          ))}
        </div>
        <div>
          <Personaladd />
        </div>
      </div>
    </div>
  );
}

export default Home;
