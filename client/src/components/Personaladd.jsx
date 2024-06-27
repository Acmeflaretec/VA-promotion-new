import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import axios from "axios";

function Personaladd() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/ads`);
        setAds(response.data.data);
      } catch (error) {
        console.error("Failed to fetch videos", error);
      }
    };

    fetchAds();
  }, []);

  return (
    <Grid container spacing={3}>
      {ads.map(ad => (
        <Grid item xs={12} md={4} key={ad._id} >
          <Card style={{textAlign:'center'}}>
            {/* Assuming `image` is a field in your ad object */}
            <CardMedia
              component="img"
              height="200"
              image={ad.image ? `${import.meta.env.VITE_BACKEND_URLBAS}/uploads/${ad?.image}` : '/placeholder-image.jpg'}
              alt={ad.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ad.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {ad.subtitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ad.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Personaladd;
