const mongoose = require('mongoose')

const paymetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    url: {
        type: String,
    },
    paymentimage: {
        type: String,
        required: true
    },
    location: {
        type: String,

    },
    type:{
        type: String,
        required: true
    },
    status: {
        type: Boolean,   
        default: false
    },
    isActive:{
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Payment', paymetSchema)

