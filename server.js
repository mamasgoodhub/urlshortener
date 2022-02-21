const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var cors = require('cors');

const Url = require('../models/Url')

const app = express();

//Connect to database
connectDB();

//CORS
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

//Define Routes
app.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });

        if(url) {
            console.log('Test');
            console.log(url.longUrl)
            url.timesVisited++
            url.save()
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No url found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});

app.use('/api/index', require('./routes/api/index'));
app.use('/api/url', require('./routes/api/url'));

const PORT = process.env.PORT || 80;

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "frontend", "build")))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend" , "build", "index.html"));
    });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));