const express = require("express");
const router = express.Router();
const MedicoController = require("../controllers/AircraftController");
const { authetincateToken } = require("../middleware/Auth");

router.get("/aircraft", authetincateToken, AircraftController.getAircraft);
router.post("/aircraft", authetincateToken, AircraftController.postAircraft);
router.put("/aircraft/:codigo", authetincateToken, AircraftController.putAircraft);
router.delete("/aircraft/:codigo", authetincateToken, AircraftController.deleteAircraft);

module.exports = router;