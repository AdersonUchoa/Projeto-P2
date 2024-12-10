const express = require("express");
const router = express.Router();
const PassengerController = require("../controllers/PassengerController");

router.get("/passenger", PassengerController.getPassenger);
router.post("/passenger", PassengerController.postPassenger);
router.put("/passenger/:passenger_id", PassengerController.putPassenger);
router.delete("/passenger/:passenger_id", PassengerController.deletePassenger);

module.exports = router;