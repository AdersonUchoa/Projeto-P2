const express = require("express");
const router = express.Router();
const AircraftController = require("../controllers/AircraftController");

router.get("/aircraft", AircraftController.getAircraft);
router.post("/aircraft", AircraftController.postAircraft);
router.put("/aircraft/:aircraft_id", AircraftController.putAircraft);
router.delete("/aircraft/:aircraft_id", AircraftController.deleteAircraft);

module.exports = router;
