const express = require("express");
const router = express.Router();
const PassengerController = require("../controllers/PassengerController");
const { authetincateToken } = require("../middleware/Auth");

router.get("/passenger", authetincateToken, PassengerController.getPassenger);
router.post("/passenger", authetincateToken, PassengerController.postPassenger);
router.put("/passenger/:passenger_id", authetincateToken, PassengerController.putPassenger);
router.delete("/passenger/:passenger_id", authetincateToken, PassengerController.deletePassenger);

module.exports = router;