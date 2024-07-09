import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Box } from '@mui/material';
import axios from "axios";

function Personaladd() {
  const [ads, setAds] = useState([]);
  const [visibleAds, setVisibleAds] = useState(3); // Number of ads to show initially

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/ads/isActiveAds`);
        setAds(response.data.data);
      } catch (error) {
        console.error("Failed to fetch videos", error);
      }
    };

    fetchAds();
  }, []);

  const handleShowMore = () => {
    setVisibleAds(prev => prev + 3); 
  };

  return (
    <Box mb={10} mt={5}>
      <Grid container spacing={3}>
        {ads.slice(0, visibleAds).map(ad => (
          <Grid item xs={12} md={4} key={ad._id} style={{ display: 'flex' }}>
            <a href={ad?.url} style={{ textDecoration: 'none', width: '100%' }}>
              <Card style={{ textAlign: 'center', flex: 1 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={ad?.image ? `${import.meta.env.VITE_BACKEND_URLBAS}/uploads/${ad?.image}` : '/placeholder-image.jpg'}
                  alt={ad?.title}
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
            </a>
          </Grid>
        ))}
      </Grid>
      {visibleAds < ads.length && (
        <Box textAlign="center" mt={3}>
          <Button variant="contained" color="primary" onClick={handleShowMore}>
            Show More
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Personaladd;
