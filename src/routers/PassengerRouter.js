const express = require("express");
const router = express.Router();
const PassengerController = require("../controllers/PassengerController");
const { authetincateToken } = require("../middleware/Auth");

router.get("/passenger", authetincateToken, PassengerController.getPassenger);
router.post("/passenger", authetincateToken, PassengerController.postPassenger);
router.put("/passenger/:codigo", authetincateToken, PassengerController.putPassenger);
router.delete("/passenger/:codigo", authetincateToken, PassengerController.deletePassenger);

module.exports = router;