const express = require("express");
const router = express.Router();
const BoardingPassController = require("../controllers/BoardingPassController");

router.get("/boardingpass", BoardingPassController.getBoardingPass);
router.post("/boardingpass", BoardingPassController.postBoardingPass);
router.put("/boardingpass/:boarding_pass_id", BoardingPassController.putBoardingPass);
router.delete("/boardingpass/:boarding_pass_id", BoardingPassController.deleteBoardingPass);

module.exports = router;