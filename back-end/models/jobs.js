const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({

    
    job_title: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        enum: ["Developer", "Manager", "Designer", "Marketing", "Other"],
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
});

var postModel = mongoose.model("Job", jobSchema);
module.exports = postModel;