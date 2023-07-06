const express = require("express");
const router = new express.Router();
const user = require("../Controllers/User/LoginSignup");
const userMisc = require("../Controllers/User/Misc");
const myGifts = require("../Controllers/User/Gifts");

// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(express.static(path.resolve(__dirname, 'public')));

router.post("/user/login", user.userLogin);

router.post("/user/register", user.userSignup);

router.get("/user/profile", user.userProfile);

router.post("/user/contact", userMisc.userCare);

router.get("/user/gifts/flowers", myGifts.getAllFlowers);

module.exports = router;
