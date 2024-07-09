const { Router } = require('express');
const router = Router();
const {
    getReview,
    addReview,
    getAdminReview,
    updateReview,
    deleteReviewById,
    getReviewById
} = require('../controllers/reviewController')
const { upload } = require('../middlewares/multer');


router.get('/',getReview)
router.post('/',addReview)
router.get('/admin',getAdminReview)
router.patch('/',upload.single('image'),updateReview)
router.delete('/:id',deleteReviewById)
router.get('/:id',getReviewById)

module.exports = router;