//backend/config.js
require('dotenv').config();

module.exports = {
	JWT_SECRET: process.env.MY_JWT_SECRET
}