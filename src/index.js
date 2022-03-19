require('dotenv').config();
const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();
app.use(cors())
app.use(router)
app.listen(process.env.PORT, () => console.log("running on port 8000"));
