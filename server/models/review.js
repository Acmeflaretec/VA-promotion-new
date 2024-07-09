 // models/ads.js
 const mongoose = require('mongoose');

 const reviewSchema = new mongoose.Schema({
    name: {
     type: String,
     required: true,
   },
   profession: {
     type: String,
     required: true,
   },
   review: {
     type: String,
     required: true,
   },
   rating: {
     type: Number,
   },
   approved: {
     type: Boolean,
     default: false ,
   },
 }, {
   timestamps: true,
 });
 
 module.exports = mongoose.model('Review', reviewSchema);
 