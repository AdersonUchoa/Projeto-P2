const express = require("express");
const router = express.Router();
const FlightController = require("../controllers/FlightController");
const { authetincateToken } = require("../middleware/Auth");

router.get("/flight", authetincateToken, FlightController.getFlight);
router.post("/flight", authetincateToken, FlightController.postFlight);
router.put("/flight/:codigo", authetincateToken, FlightController.putFlight);
router.delete("/flight/:codigo", authetincateToken, FlightController.deleteFlight);

module.exports = router;