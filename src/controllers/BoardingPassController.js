const BoardingPassService = require('../services/BoardingPassService');

class BoardingPassController {
    async getBoardingPass(req, res){
        try{
            const result = await BoardingPassService.getBoardingPass();
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }

    async postBoardingPass(req, res){
        try{
            const {seat_number, passenger_id, flight_id, issue_time} = req.body;
            const result = await BoardingPassService.postBoardingPass(seat_number, passenger_id, flight_id, issue_time);
            res.status(result.code).json(result);
        }catch (error){

        }
    }

    async putBoardingPass(req, res){
        try{
            const {boarding_pass_id} = req.params;
            const {seat_number, passenger_id, flight_id, issue_time} = req.body;
            const result = await BoardingPassService.putBoardingPass(boarding_pass_id, seat_number, passenger_id, flight_id, issue_time);
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }

    async deleteBoardingPass(req, res){
        try{
            const {boarding_pass_id} = req.params;
            const result = await BoardingPassService.deleteBoardingPass(boarding_pass_id);
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }
}

module.exports = new BoardingPassController();