const express = require("express");
const { createuser, home } = require("../controllers/userControllers");
const router = express.Router();



router.get("/", home);

router.post("/create",createuser);

module.exports = router;
