const mongoose = require("mongoose");

const foundReportSchema = new mongoose.Schema({

    lostItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lost",
        required: true
    },

    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    name: String,

    description: String,

    contactInfo: String,
    
    status: {
        type: String,
        default: "Pending"
    }

}, { timestamps: true });

module.exports = mongoose.model("foundreport", foundReportSchema);