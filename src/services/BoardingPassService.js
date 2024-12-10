const sequelize = require("../database/database");

class BoardingPassService{
    async getBoardingPass(){
        try{
            const query = 'SELECT * from boarding_pass';
            const [results] = await sequelize.query(query);
            return {
                code: 200,
                data: results,
                message: "Cartões de embarque obtidos com sucesso!",
            };
        }catch (error){
            console.error("Erro ao buscar cartões de embarque: " ,error);
            throw{
                code: 500,
                message: "Erro ao obter os cartões de embarque",
            };
        }
    }

    async postBoardingPass(seat_number, passenger_id, flight_id, issue_time){
        try{
            const query = 'INSERT into boarding_pass(seat_number, passenger_id, flight_id, issue_time) VALUES (:model, :manufacturer, :capacity) RETURNING *';
            const [results] = await sequelize.query(query, {replacements: {seat_number, passenger_id, flight_id, issue_time} });
            return{
                code: 201,
                data: results[0],
                message: "Cartão de embarque criado com sucesso!"
            };
        }catch(error){
            console.error("Erro ao criar cartão de embarque: " ,error);
            throw{
                code: 500,
                message: "Erro ao criar o cartão de embarque",
            };
        }
    }

    async putBoardingPass(boarding_pass_id, seat_number, passenger_id, flight_id, issue_time){
        try{
            const query = "UPDATE boarding_pass SET seat_number = :seat_number, passenger_id = :passenger_id, flight_id = :flight_id, issue_time = :issue_time WHERE boarding_pass_id = :boarding_pass_id RETURNING*";
            const [results] = await sequelize.query(query, {replacements: {boarding_pass_id, seat_number, passenger_id, flight_id, issue_time} });

            if(results.length === 0){
                return{
                    code: 404,
                    message: "Cartão de embarque não encontrado!"
                }
            };

            return {
                code: 200,
                data: results[0],
                message: "Cartão de embarque atualizado com sucesso!"
            };
        }catch (error){
            console.error("Erro ao atualizar cartão de embarque: " ,error);
            throw{
                code: 500,
                message: "Erro ao atualizar o cartão de embarque",
            };
        }
    }
    
    async deleteBoardingPass(boarding_pass_id){
        try{
            const query = 'DELETE from boarding_pass WHERE boarding_pass_id = :boarding_pass_id RETURNING *';
            const [results] = await sequelize.query(query, {replacements: {boarding_pass_id} });

            if(results.length === 0){
                return{
                    code: 404,
                    message: "Cartão de embarque não encontrado!"
                }
            };

            return{
                code: 200,
                data: results[0],
                message: "Cartão de embarque deletado com sucesso!"
            };
        }catch(error){
            console.error("Erro ao deletar cartão de embarque: " ,error);
            throw{
                code: 500,
                message: "Erro ao celetar o cartão de embarque",
            };
        }
    }
}

module.exports = new BoardingPassService();