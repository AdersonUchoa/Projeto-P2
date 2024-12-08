const express = require("express");
const router = express.Router();
const BoardingPassController = require("../controllers/BoardingPassController");
const { authetincateToken } = require("../middleware/Auth");

router.get("/boardingpass", authetincateToken, BoardingPassController.getBoardingPass);
router.post("/boardingpass", authetincateToken, BoardingPassController.postBoardingPass);
router.put("/boardingpass/:boarding_pass_id", authetincateToken, BoardingPassController.putBoardingPass);
router.delete("/boardingpass/:boarding_pass_id", authetincateToken, BoardingPassController.deleteBoardingPass);

module.exports = router;