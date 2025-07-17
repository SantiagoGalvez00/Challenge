const router = require('express').Router();

router.get('/users', (req, res) => {
    res.send('ok from users');
})

module.exports = router;