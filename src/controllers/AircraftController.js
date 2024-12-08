const AircraftService = require('../services/AircraftService');

class AircraftController {
    constructor() {
        this.aircraftService = new AircraftService();
    }

    async getAircraft(req, res) {
        try {
            const result = await this.aircraftService.getAircraft();
            res.status(result.code).json(result);
        } catch (error) {
            res.status(error.code || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async postAircraft(req, res) {
        try {
            const { model, manufacturer, capacity } = req.body;
            const result = await this.aircraftService.postAircraft(model, manufacturer, capacity);
            res.status(result.code).json(result);
        } catch (error) {
            res.status(error.code || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async putAircraft(req, res) {
        try {
            const { id } = req.params;
            const { model, manufacturer, capacity } = req.body;
            const result = await this.aircraftService.putAircraft(id, model, manufacturer, capacity);
            res.status(result.code).json(result);
        } catch (error) {
            res.status(error.code || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async deleteAircraft(req, res) {
        try {
            const { id } = req.params;
            const result = await this.aircraftService.deleteAircraft(id);
            res.status(result.code).json(result);
        } catch (error) {
            res.status(error.code || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }
}

module.exports = new AircraftController();