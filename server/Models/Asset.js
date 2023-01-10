const { Schema, model } = require('mongoose');

const assetSchema = new Schema({
    _id: {

    },
    cctv: {
        type: String,
        trim: true
    },
    number: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    length: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    area: {
        type: String,
        required: true,
        trim: true
    },
})

const Asset = model('Asset', assetSchema);
module.exports = Asset;