const express = require("express");
const donorController = require("../controllers/donorController");

const router = express.Router();
router.post("/", donorController.addDonor);

router.get("/", donorController.getDonors);
module.exports = router;
