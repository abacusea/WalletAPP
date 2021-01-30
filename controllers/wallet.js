const { Wallet } = require('../models/wallet');
const { errorHandler } = require('../helpers/dbErrorHandler');
const moment = require('moment');

exports.walletById = (req, res, next, id) => {
    Wallet.findById(id)
        .exec((err, wallet) => {
            if (err || !wallet) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            req.wallet = wallet;
            next();
        });
};

exports.read = (req, res) => {
	if(req.wallet.status == "enabled"){
		return res.json("status":"success", req.wallet);
	}
    if(req.wallet.status == "disabled"){
		return res.json("status":"fail", "First enable your Wallet ");
	}
};

exports.enable = (req, res) => {
    req.body.wallet.owned_by = req.profile;
    req.body.wallet.balance = req.profile;
    req.body.wallet.enabled_at =  moment().format();
    
    const wallet = new Wallet(req.body.wallet);
    wallet.save((error, data) => {
        if (error) {
            return res.status(400).json({
            	"status": "fail",
                error: errorHandler(error)
            });
        }
        
        res.json("status": "success", data);
    });
};

exports.disable = (req, res) => {
    Wallet.update({ _id: req.body.walletId }, { $set: { status: "disabled" } }, (err, wallet) => {
        if (err) {
            return res.status(400).json({
            	"status": "fail",
                error: errorHandler(err)
            });
        }
        res.json("status": "success", wallet);
    });
};