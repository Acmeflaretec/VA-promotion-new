const { Router } = require('express');
const router = Router();
const {
  createPayment,
  updatePaymentById,
  getPayment,
  getChannel,
  deletePaymentById,
  getPaymentById,
  getVideo,
  updateVideo,
  getIsActiveVideo
} = require('../controllers/paymentController')
const { upload } = require('../middlewares/multer');

router.get('/',getPayment)
router.get('/channel',getChannel)
router.get('/video',getVideo)
router.get('/isactivevideo',getIsActiveVideo)
router.post('/',upload.single('image'),createPayment)
router.patch('/',upload.single('image'),updatePaymentById)
router.patch('/video',upload.single('image'),updateVideo)
router.delete('/:id',deletePaymentById)
router.get('/:id',getPaymentById)


module.exports = router;   