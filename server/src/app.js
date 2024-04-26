'use strict';

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const indexRoute = require("./routes/index-route.js");
const userRoute = require("./routes/user-route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({
    origin: ["https://trabalho-mantovani.vercel.app", "http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"]
}));

app.use("/", indexRoute);
app.use("/users", userRoute);

module.exports = app;