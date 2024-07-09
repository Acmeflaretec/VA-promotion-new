

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Col, Row, Modal } from "react-bootstrap";
import Personaladd from "../components/Personaladd";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import Footer from '../components/Footer';
import Review from "../components/Review";  // Import Review component
import { Button, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";  // Import Carousel component
import { Paper, Typography, Box, Rating } from "@mui/material";  // Import Paper and Typography components

function Home() {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showReviewModal, setShowReviewModal] = useState(false);  // State for review modal
  const [reviews, setReviews] = useState([]); // State to hold approved reviews

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/payment/isactivevideo`);
        const shuffledVideos = shuffleArray(response.data.data);
        setVideos(shuffledVideos);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch videos", error);
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/reviews`);
        setReviews(response.data.data);
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      }
    };

    fetchVideos();
    fetchReviews();
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };
  // console.log(reviews);
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
        <div className="text-center mt-5">
          <Button variant="contained" color="primary" onClick={() => setShowReviewModal(true)}>
            Add Review
          </Button>
        </div>

        {/* Carousel for Reviews */}
        <Container className="mt-5">
          <Typography variant="h4" className="text-center mb-4"><strong> User Reviews</strong></Typography>
          <Carousel>
            {reviews.map((review, index) => (
              <Paper key={index} className="p-4" style={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                  <Typography variant="body1" className="text-center" style={{ overflowWrap: 'anywhere' }}>"{review.review}"</Typography>
                  <Typography variant="body1" className="text-center"><strong>{review.name}</strong> </Typography>
                  <Typography variant="body2" className="text-center">{review.profession}</Typography>
                  <div style={{display:'flex',justifyContent:'center'}} > 
                  <Rating
                    name="rating"
                    value={review.rating}
                  />
                  </div>
                </Box>
              </Paper>
            ))}
          </Carousel>
        </Container>
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

      <Review open={showReviewModal} handleClose={() => setShowReviewModal(false)} />

      <Footer />
    </div>
  );
}

export default Home;
