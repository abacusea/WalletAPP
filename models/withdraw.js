const mongoose = require("mongoose");


const withdrawSchema = new mongoose.Schema(
    {
        withdrawal_by: {
            type: ObjectId,
            ref: "User"
        },
        status: {
            type: String,
            default: "success",
                enum: ["success", "fail"]
        },
        withdrawn_at: {
            type: String
        },
        amount: {
            type: Number
        },
        reference_id: {
            unique: true,
            type: String   
        },
    { timestamps: true }
);

module.exports = mongoose.model("Withdraw", withdrawSchema);