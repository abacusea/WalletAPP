const { Withdraw } = require('../models/withdraw');
const { errorHandler } = require('../helpers/dbErrorHandler');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

exports.withdrawFrom = (req, res) => {
    req.body.withdraw.withdrawal_by = req.profile;
    req.body.withdraw.reference_id = uuidv4();
    req.body.withdraw.withdrawn_at =  moment().format();

    const withdraw = new Withdraw(req.body.withdraw);
    withdraw.save((error, data) => {
        if (error) {
            return res.status(400).json({
            	"status": "fail",
                error: errorHandler(error)
            });
        }
        
        res.json("status": "success", data);
    });
};