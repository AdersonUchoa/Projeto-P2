const AircraftService = require("../services/AircraftService");
class AircraftController {
  async getAircraft(req, res) {
    try {
      const result = await AircraftService.getAircraft();
      res.status(result.code).json(result);
    } catch (error) {
      res
        .status(error.code || 500)
        .json({ message: error.message || "Erro interno do servidor" });
    }
  }

  async postAircraft(req, res) {
    try {
      const { model, manufacturer, capacity } = req.body;
      const result = await AircraftService.postAircraft(
        model,
        manufacturer,
        capacity
      );
      res.status(result.code).json(result);
    } catch (error) {
      res
        .status(error.code || 500)
        .json({ message: error.message || "Erro interno do servidor" });
    }
  }

  async putAircraft(req, res) {
    try {
      const { aircraft_id } = req.params;
      const { model, manufacturer, capacity } = req.body;
      const result = await AircraftService.putAircraft(
        aircraft_id,
        model,
        manufacturer,
        capacity
      );
      res.status(result.code).json(result);
    } catch (error) {
      res
        .status(error.code || 500)
        .json({ message: error.message || "Erro interno do servidor" });
    }
  }

  async deleteAircraft(req, res) {
    try {
      const { aircraft_id } = req.params;
      const result = await AircraftService.deleteAircraft(aircraft_id);
      res.status(result.code).json(result);
    } catch (error) {
      res
        .status(error.code || 500)
        .json({ message: error.message || "Erro interno do servidor" });
    }
  }
}

module.exports = new AircraftController();
