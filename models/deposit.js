const mongoose = require("mongoose");


const depositSchema = new mongoose.Schema(
    {
        deposited_by: {
            type: ObjectId,
            ref: "User"
        },
        status: {
            type: String,
            default: "success",
                enum: ["success", "fail"]
        },
        deposited_at: {
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

module.exports = mongoose.model("Deposit", depositSchema);
