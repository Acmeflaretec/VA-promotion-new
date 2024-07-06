
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Col, Row, Modal } from "react-bootstrap";
import Personaladd from "../components/Personaladd";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css"; 

function Home() {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/payment/isactivevideo`);
        setVideos(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch videos", error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <div>
      <Navbar />
      <div className="banner">
        {/* <h1 className="banner-text">Welcome to Our Platform!</h1> */}
      </div>
      <div className="container">
        <Row>
          <Col md={12}>
            <div className="text-center p-5">
              <Link to={"/menu"}>
                <button className="btn btn-danger">Get Promotion</button>
              </Link>
            </div>
          </Col>
        </Row>
        {loading ? (
          <div className="preloader">
            <img src="/src/assets/preloader.gif" alt="Loading..." />
          </div>
        ) : (
          <div className="video-container mb-5">
            {videos.map((video) => (
              <div key={video._id} className="video-item shadow" onClick={() => handleVideoClick(video.url)}>
                <iframe
                  src={`https://www.youtube.com/embed/${new URL(video.url).searchParams.get('v')}`}
                  title={video.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            ))}
          </div>
        )}
        <div>
          <Personaladd />
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Video Playback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedVideo && (
            <iframe
              src={`https://www.youtube.com/embed/${new URL(selectedVideo).searchParams.get('v')}`}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="video-frame"
              style={{ width: "100%", height: "400px" }}
            ></iframe>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Home;
