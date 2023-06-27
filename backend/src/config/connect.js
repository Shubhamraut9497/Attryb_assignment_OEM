const mongoose = require("mongoose");
require('dotenv').config();
const connect = async() => {
    return  await mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log('Connected to MongoDB');
    })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        })
}

module.exports = connect