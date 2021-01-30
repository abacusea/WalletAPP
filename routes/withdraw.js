const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

const {
    withdrawFrom,
} = require("../controllers/deposit");

router.post(
    "/v1/wallet/withdrawals/:userId",
    requireSignin,
    isAuth,
    withdrawFrom
);

router.param("userId", userById);

module.exports = router;
