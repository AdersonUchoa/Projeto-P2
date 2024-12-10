const express = require("express");
const router = express.Router();
const FlightController = require("../controllers/FlightController");

router.get("/flight", FlightController.getFlight);
router.post("/flight", FlightController.postFlight);
router.put("/flight/:flight_id", FlightController.putFlight);
router.delete("/flight/:flight_id", FlightController.deleteFlight);

module.exports = router;