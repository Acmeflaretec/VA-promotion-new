const Review = require('../models/review')

const getReview = async (req, res) => {
    try {
        const reviews = await Review.find({ approved: true });
        res.status(200).json({ data: reviews });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const addReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json({ data: review });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const getAdminReview = async (req, res) => {
    // console.log('sam12');

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const review = await Review.find().sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();

        res.json({ data: review });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const updateReview = async (req, res) => {
    // console.log('sam12');
    try {
        const { _id, approved } = req.body;
    
        const user = await Review.findById(_id);
        if(approved === 'true') {
          user.approved = 'false'
        }else{
          user.approved = 'true'
        }
        await user.save()
        res.json({ message: ' updated successfully', data: user });
      } catch (error) { 
          res.status(400).json({ error: error.message });
      }
};

const deleteReviewById = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        res.json({ message: ' deleted successfully', data: review });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getReviewById = async (req, res) => {
    try {
        const payment = await Review.findById(req.params.id);

        if (!payment) {
            return res.status(404).json({ message: ' not found' });
        }

        res.json({ data: payment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    getReview,
    addReview,
    getAdminReview,
    updateReview,
    deleteReviewById,
    getReviewById

}