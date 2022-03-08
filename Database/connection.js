const mongoose = require("mongoose")

mongoose.connect(process.env.URL)
    .then((result) => {
        console.log("Connected to Database");
    }).catch((err) => {
        console.log("Error in Connecting to Database");
    });