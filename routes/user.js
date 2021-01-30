const express = require('express');
const router = express.Router();

const { requireSignin, isAuth} = require('../controllers/auth');

const { userById, read } = require('../controllers/user');

router.get('/secret', requireSignin, (req, res) => {
    res.json({
        user: 'got here yay'
    });
});

router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth,);
router.get('/deposit/by/user/:userId', requireSignin, isAuth);

router.param('userId', userById);

module.exports = router;
