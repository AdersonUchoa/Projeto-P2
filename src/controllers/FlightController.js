const FlightService = require('../services/FlightService');

class FlightController{
    constructor(){
        this.flightService = new FlightService();
    }

    async getFlight(req, res){
        try{
            const result = await this.flightService.getFlight();
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }

    async postFlight(req, res){
        try{
            const {flight_number, departure_airport, arrival_airport, departure_time, arrival_time, aircraft_id} = req.body;
            const result = await this.flightService.postFlight(flight_number, departure_airport, arrival_airport, departure_time, arrival_time, aircraft_id);
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }

    async putFlight(req, res){
        try{
            const {flight_id} = req.params;
            const {flight_number, departure_airport, arrival_airport, departure_time, arrival_time, aircraft_id} = req.body;
            const result = await this.flightService.putFlight(flight_id, flight_number, departure_airport, arrival_airport, departure_time, arrival_time, aircraft_id);
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }

    async deleteFlight(req, res){
        try{
            const {flight_id} = req.params;
            const result = await this.flightService.deleteFlight(flight_id);
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }
}

module.exports = new FlightController();