const express = require("express");
const router = new express.Router();
const bodyParser = require('body-parser');
const user = require("../Controllers/User/LoginSignup")


router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, 'public')));


router.post("/User/Login", user.userLogin );

module.exports = router;
