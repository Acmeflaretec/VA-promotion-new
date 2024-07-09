import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Box,Rating, Button, TextField, Typography,  } from '@mui/material';

const Review = ({ open, handleClose }) => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/reviews`, { name, profession, review, rating }); 
    handleClose();  
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Add Review
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Profession"
            variant="outlined"
            margin="normal"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Review"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Rating</Typography>
            <Rating
              name="rating"
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              required
            />
          </Box>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default Review;
