const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI, {
            useNewUrlParser: true
        });

        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;