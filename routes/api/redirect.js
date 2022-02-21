const express = require('express');
const router = express.Router();

const Url = require('../../models/Url');

router.get('/:code', async (req, res) => {
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