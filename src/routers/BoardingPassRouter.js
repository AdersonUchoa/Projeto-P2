const express = require("express");
const router = express.Router();
const BoardingPassController = require("../controllers/BoardingPassController");

router.get("/boardingpass", BoardingPassController.getBoardingPass.bind(BoardingPassController));
router.post("/boardingpass", BoardingPassController.postBoardingPass.bind(BoardingPassController));
router.put("/boardingpass/:boarding_pass_id", BoardingPassController.putBoardingPass.bind(BoardingPassController));
router.delete("/boardingpass/:boarding_pass_id", BoardingPassController.deleteBoardingPass.bind(BoardingPassController));

module.exports = router;