const express = require("express");
const router = express.Router();
const FlightController = require("../controllers/FlightController");

router.get("/flight", FlightController.getFlight.bind(FlightController));
router.post("/flight", FlightController.postFlight.bind(FlightController));
router.put("/flight/:flight_id", FlightController.putFlight.bind(FlightController));
router.delete("/flight/:flight_id", FlightController.deleteFlight.bind(FlightController));

module.exports = router;