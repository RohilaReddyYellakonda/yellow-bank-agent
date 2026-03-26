const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./routes/auth");
const loanRoutes = require("./routes/loan");

app.use("/auth", authRoutes);
app.use("/loan", loanRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});