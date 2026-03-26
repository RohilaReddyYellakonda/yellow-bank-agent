function getLoanAccounts() {
    return [
        {
            loan_id: "LN001",
            loan_type: "Home Loan",
            tenure: "20 years",
            internal_code: "X123",
            audit_date: "2025-01-01"
        },
        {
            loan_id: "LN002",
            loan_type: "Car Loan",
            tenure: "5 years",
            internal_code: "Y456",
            audit_date: "2025-02-01"
        }
    ];
}

function getLoanDetails(id) {
    return {
        tenure: "5 years",
        interest_rate: "8%",
        principal_pending: "5,00,000",
        interest_pending: "50,000",
        nominee: "John Doe"
    };
}

module.exports = { getLoanAccounts, getLoanDetails };