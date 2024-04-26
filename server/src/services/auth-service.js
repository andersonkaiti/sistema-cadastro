'use strict';

require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.generateToken = async(data) => {
    return jwt.sign(data, process.env.SALT_KEY, { expiresIn: "1d" });
}

exports.authenticate = async(req, res, next) => {
    let token = req.headers.token;
    if(!token) {
        res.status(401).json({
            status: false,
            message: "Acesso Restrito",
            error: error.message
        });
    } else {
        jwt.verify(token, process.env.SALT_KEY, (error, decoded) => {
            if(error) {
                res.status(401).json({
                    status: false,
                    message: "Acesso Restrito",
                    error: error.message
                });
            } else {
                const { email, ...rest } = decoded;
                res.json({
                    status: true,
                    email
                })
            }
        });
    }
}