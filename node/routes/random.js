const express = require('express');
const router = express.Router();

router.get('/profile', function (req, res) {
    res.render('profile');
});


router.get('/carlos', function (req, res) {
    res.render('carlos');
});


router.use((req, res) => {
    res.status(404);
    res.render('404');
});

module.exports = router;