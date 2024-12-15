const express = require("express");
const router = express.Router();
const BoardingPassController = require("../controllers/BoardingPassController");
const { verifyAuth } = require("../middleware/auth");

router.get("/boarding", verifyAuth, BoardingPassController.getBoarding);
router.get("/boardingpass", verifyAuth, BoardingPassController.getBoardingPass);
router.post(
  "/boardingpass",
  verifyAuth,
  BoardingPassController.postBoardingPass
);
router.put(
  "/boardingpass/:boarding_pass_id",
  verifyAuth,
  BoardingPassController.putBoardingPass
);
router.delete(
  "/boardingpass/:boarding_pass_id",
  verifyAuth,
  BoardingPassController.deleteBoardingPass
);

module.exports = router;
