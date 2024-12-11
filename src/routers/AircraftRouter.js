const express = require("express");
const router = express.Router();
const AircraftController = require("../controllers/AircraftController");

router.get(
  "/aircraft",
  AircraftController.getAircraft.bind(AircraftController)
);
router.post(
  "/aircraft",
  AircraftController.postAircraft.bind(AircraftController)
);
router.put(
  "/aircraft/:aircraft_id",
  AircraftController.putAircraft.bind(AircraftController)
);
router.delete(
  "/aircraft/:aircraft_id",
  AircraftController.deleteAircraft.bind(AircraftController)
);

module.exports = router;
