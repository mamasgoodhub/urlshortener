const express = require('express');
const router = express.Router();

const Url = require('../../models/Url');

//@route GET URLs
//@desc Get all urls
router.get('/api/index', (req, res) => {
    Url.find()
    .then(urls => res.json(urls))
    .catch( err => res.status(404).json( { nourlsfound: 'No urls found'}));
});

// @route GET /:code
// @desc  Redirect to original URL
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });

        if(url) {
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

module.exports = router;