const express = require("express");
const router = new express.Router();
const admin = require('../Controllers/Admin/Catalog')

router.post("/admin/add-product", admin.addProduct);

router.delete("/admin/remove-product", admin.removeProduct);

module.exports = router

