const { Router } = require('express');
const router = Router();
const {
  createAds,
  updateAdsById,
  getAds,
  deleteAdsById,
  getAdsById,

} = require('../controllers/adsController')
const { upload } = require('../middlewares/multer');

router.get('/',getAds)
router.post('/',upload.single('image'),createAds)
router.patch('/',upload.single('image'),updateAdsById)
router.delete('/:id',deleteAdsById)
router.get('/getads/:id',getAdsById)


module.exports = router;