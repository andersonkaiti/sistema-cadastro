'use strict';

const database = require("../../config/database.js");

exports.get = (req, res) => {
    res.status(200).json({
        message: "API de cadastro e login",
        version: "1.0.0"
    });
}