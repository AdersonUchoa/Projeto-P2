const express = require('express');
const router = express.Router();
const AircraftController = require("../controllers/AircraftController");
const { authetincateToken } = require("../middleware/Auth");

router.get("/aircraft", authetincateToken, AircraftController.getAircraft);
router.post("/aircraft", authetincateToken, AircraftController.postAircraft);
router.put("/aircraft/:aircraft_id", authetincateToken, AircraftController.putAircraft);
router.delete("/aircraft/:aircraft_id", authetincateToken, AircraftController.deleteAircraft);

module.exports = router;