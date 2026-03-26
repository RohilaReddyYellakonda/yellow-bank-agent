// Extract only required fields (CRITICAL)
function projectLoanAccounts(data) {
    return data.map(item => ({
        loanId: item.loan_id,
        loanType: item.loan_type,
        tenure: item.tenure
    }));
}

module.exports = { projectLoanAccounts };