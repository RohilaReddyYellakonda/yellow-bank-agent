# Yellow Bank Agent

## Overview
GenAI Banking Agent that:
- Authenticates user via OTP
- Fetches loan accounts
- Displays loan details
- Handles edge cases
- Collects CSAT feedback

## Features
- OTP verification
- Token optimization using projection
- Dynamic workflows
- Failure handling

## Run Locally

cd backend
npm install
npm start

Server runs at:
http://localhost:3000

## APIs

POST /auth/trigger-otp
POST /auth/verify-otp
GET /loan/accounts
GET /loan/details/:id

## Tech Stack
- Node.js
- Express

## Author
Rohila Reddy Yellakonda Yellow Bank Agent