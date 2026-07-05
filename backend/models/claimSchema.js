const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema({

    foundItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "found",
        required: true
    },

    claimantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    foundOwnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    answer: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "Pending"
    }

}, { timestamps: true });

module.exports = mongoose.model("claimrequest", claimSchema);