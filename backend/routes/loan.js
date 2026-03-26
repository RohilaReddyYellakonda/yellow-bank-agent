const express = require("express");
const router = express.Router();
const { getLoanAccounts, getLoanDetails } = require("../services/loanService");
const { projectLoanAccounts } = require("../utils/projection");

router.get("/accounts", (req, res) => {
    const data = getLoanAccounts();

    // TOKEN OPTIMIZATION
    const filtered = projectLoanAccounts(data);

    res.json(filtered);
});

router.get("/details/:id", (req, res) => {
    const details = getLoanDetails(req.params.id);
    res.json(details);
});

module.exports = router;