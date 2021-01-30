const { Deposit } = require('../models/deposit');
const { Wallet } = require('../models/wallet');
const { errorHandler } = require('../helpers/dbErrorHandler');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

exports.addToWallet = (req, res) => {
    req.body.deposit.deposited_by = req.profile;
    req.body.deposit.reference_id = uuidv4();
    req.body.deposit.deposited_at =  moment().format();

    const deposit = new Deposit(req.body.deposit);
    deposit.save((error, data) => {
        if (error) {
            return res.status(400).json({
            	"status": "fail",
                error: errorHandler(error)
            });
        }
        
        res.json("status": "success", data);
    });
};

exports.isEnable = (req, res, next) => {
	if(req.wallet.status == "enabled"){
		return true	
	}
  
};
