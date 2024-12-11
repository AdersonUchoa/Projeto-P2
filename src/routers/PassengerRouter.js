const express = require("express");
const router = express.Router();
const PassengerController = require("../controllers/PassengerController");

router.get(
  "/passenger",
  PassengerController.getPassenger.bind(PassengerController)
);
router.post(
  "/passenger",
  PassengerController.postPassenger.bind(PassengerController)
);
router.put(
  "/passenger/:passenger_id",
  PassengerController.putPassenger.bind(PassengerController)
);
router.delete(
  "/passenger/:passenger_id",
  PassengerController.deletePassenger.bind(PassengerController)
);

module.exports = router;
