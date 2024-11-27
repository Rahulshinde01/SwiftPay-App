// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

PORT = process.env.PORT;
app.listen(PORT);