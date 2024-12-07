const express = require("express");
const router = express.Router();
const BoardingPassController = require("../controllers/BoardingPassController");
const { authetincateToken } = require("../middleware/Auth");

router.get("/boardingpass", authetincateToken, BoardingPassController.getBoardingPass);
router.post("/boardingpass", authetincateToken, BoardingPassController.postBoardingPass);
router.put("/boardingpass/:codigo", authetincateToken, BoardingPassController.putBoardingPass);
router.delete("/boardingpass/:codigo", authetincateToken, BoardingPassController.deleteBoardingPass);

module.exports = router;