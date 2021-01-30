const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

const {
    enable,
    disable,
    walletById
} = require("../controllers/wallet");

router.post(
    "/v1/wallet/enable/:userId",
    requireSignin,
    isAuth,
    enable
);

router.post(
    "/v1/wallet/disable/:userId",
    requireSignin,
    isAuth,
    disable
);
router.get(
    "/v1/wallet/:userId",
    requireSignin,
    isAuth,
    read
);

router.param("userId", userById);
router.param("walletId", walletById);

module.exports = router;