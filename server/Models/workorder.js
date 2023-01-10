const { Schema, model } = require('mongoose');

const workorderSchema = new Schema({
    _id: {

    },
    contractor: {
        //who is or has done the work
        type: String,
        required: true,
        trim: true
    },
    asset: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    work: {
        //what work is to be carried out usually identified by a meter reference from asset start
        type: String,
        required: true,
        trim: true
    },
    accessibility: {
        //is there easy acess to the asset location
        type: String,
        required: true,
        trim: true
    },
    videoQuality: {
        type: String,
        trim: true
    },
    videoUpload: {
        //if work was to cctv the asset upload link here
        type: String,
        trim: true
    },
    cctvView: {
        //what stage video was viewed (post/ pre/ post&pre)
        type: String,
        required: true,
        trim: true
    },
    reviewed: {
        //yes or no if video has been watched
        type: String,
        required: true,
        trim: true
    },
    area: {
        //north/ south/ east/ west
        type: String,
        required: true,
        trim: true
    },
    comments: {
        type: String,
        trim: true
    },
})

const Workorder = model('Workorder', workorderSchema);
module.exports = Workorder;