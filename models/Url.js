const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    timesCreated: Number,
    timesVisited: Number
});

module.exports = mongoose.model('Url', urlSchema);