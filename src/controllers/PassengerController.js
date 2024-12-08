const PassengerService = require('../services/PassengerService');

class PassengerController{
    constructor(){
        this.PassengerService = new PassengerService();
    }

    async getPassenger(req, res){
        try{
            const result = await this.PassengerService.getPassenger();
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }

    async postPassenger(req, res){
        try{
            const {first_name, last_name, birth_date, passport_number} = req.body;
            const result = await this.PassengerService.postPassenger(first_name, last_name, birth_date, passport_number);
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }

    async putPassenger(req, res){
        try{
            const {passenger_id} = req.params;
            const {first_name, last_name, birth_date, passport_number} = req.body;
            const result = await this.PassengerService.putPassenger(passenger_id, first_name, last_name, birth_date, passport_number);    
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }

    async deletePassenger(req, res){
        try{
            const {passenger_id} = req.params;
            const result = await this.PassengerService.deletePassenger(passenger_id);    
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }
}

module.exports = new PassengerController();