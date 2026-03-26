const otps = [1234, 5678, 7889, 1209];

function generateOTP() {
    const otp = otps[Math.floor(Math.random() * otps.length)];
    return otp;
}

function verifyOTP(input, realOtp) {
    return input == realOtp;
}

module.exports = { generateOTP, verifyOTP };