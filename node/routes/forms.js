const express = require('express');
const router = express.Router();

router.get('/form', (req, res) => {
    res.render('form');
});

router.post('/form', (req, res) => {
    res.render('formSuccessPage', { data: req.body });
});
module.exports = router;