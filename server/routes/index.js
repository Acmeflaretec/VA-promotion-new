const express = require('express');
const router = express.Router();

const adsRoutes = require('../routes/adsRoutes')
const paymentRoutes = require('../routes/paymentRoutes')
const reviewtRoutes = require('../routes/reviewtRoutes')

router.use('/v1/ads',adsRoutes );
router.use('/v1/payment',paymentRoutes );
router.use('/v1/reviews',reviewtRoutes );

module.exports = router;