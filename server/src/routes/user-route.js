'use strict';

const router = require("express").Router();
const authService = require("../services/auth-service");
const controller = require("../controllers/user-controller");

router.get("/", controller.get);
router.get("/auth", authService.authenticate);
router.post("/register", controller.register);
router.post("/login", controller.login);

module.exports = router;