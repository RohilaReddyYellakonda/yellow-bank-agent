const express = require("express");
const router = express.Router();
const { generateOTP } = require("../services/otpService");

let currentOTP = null; // ✅ shared variable

// 🔹 Trigger OTP
router.post("/trigger-otp", (req, res) => {
    currentOTP = generateOTP();
    console.log("Generated OTP:", currentOTP); // 👈 DEBUG
    res.json({ otp: currentOTP });
});

// 🔹 Verify OTP
router.post("/verify-otp", (req, res) => {
    console.log("Stored OTP:", currentOTP);
    console.log("User OTP:", req.body);

    const otp = req.body && req.body.otp;

    if (otp == currentOTP) {
        return res.json({ success: true });
    }

    res.json({ success: false });
});

module.exports = router;