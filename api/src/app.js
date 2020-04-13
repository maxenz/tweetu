const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user");
const twitterRouter = require("./routers/twitter");
const app = express();
require("./db/mongoose");

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(twitterRouter);

module.exports = app;
