const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
    {
         owned_by: {
            type: ObjectId,
            ref: "User"
        },
        status: {
            type: String,
            default: "enabled",
                enum: ["enabled", "disabled"]
        },
        enabled_at: {
            type: String
        },
        balance: {
            type: Number,
            default: 0
        },
    { timestamps: true }
);

module.exports = mongoose.model("Wallet", walletSchema);