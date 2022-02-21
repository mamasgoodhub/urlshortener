const express = require('express');
const router = express.Router();

const Url = require('../../models/Url');

//@route GET URLs
//@desc Get all urls
router.get('/', (req, res) => {
    Url.find()
    .then(urls => res.json(urls))
    .catch( err => res.status(404).json( { nourlsfound: 'No urls found'}));
});

module.exports = router;