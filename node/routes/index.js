const express = require('express');
const router = express.Router();

// 'get' is the url-element
router.get('/', (req, res, next) => {
    // 'render' gets the .ejs file as is
    res.render('index');
});

router.use(require('./forms'));
router.use(require('./random'));

module.exports = router;