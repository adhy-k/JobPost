const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({

    
    jobTitle: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        enum: ["Development", "Design", "Marketing", "Other"],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

var postModel = mongoose.model("Job", jobSchema);
module.exports = postModel;