const sequelize = require('../database/database');

class FlightService {
    async getFlight() {
        try {
            const [results] = await sequelize.query("SELECT * FROM flight");
            return {
                code: 200,
                data: results,
                message: "Voos obtidos com sucesso!",
            };
        } catch (error) {
            console.error("Erro ao buscar voo:", error);
            throw {
                code: 500,
                message: "Erro ao obter os voos",
            };
        }
    }

    async postFlight(flight_number, departure_airport, arrival_airport, departure_time, arrival_time, aircraft_id){
        try{
            const query = 'INSERT into flight(flight_number, departure_airport, arrival_airport, departure_time, arrival_time, aircraft_id) VALUES (:flight_number, :departure_airport, :arrival_airport, :departure_time, :arrival_time, :aircraft_id) RETURNING*';
            const [results] = await sequelize.query(query, { replacements: {flight_number, departure_airport, arrival_airport, departure_time, arrival_time, aircraft_id} });
            return{
                code: 201,
                data: results[0],
                message: "Voo cadastrado com sucesso!",
            };
        }catch (error){
            console.error("Erro ao cadastrar voo: " ,error);
            throw{
                code: 500,
                message: "Erro ao cadastrar o voo",
            };
        }
    }

    async putFlight(flight_id, flight_number, departure_airport, arrival_airport, departure_time, arrival_time, aircraft_id){
        try{
            const query = "UPDATE flight SET flight_number = :flight_number, departure_airport = :departure_airport, arrival_airport = :arrival_airport, departure_time = :departure_time, arrival_time = :arrival_time, aircraft_id = aircraft_id WHERE flight_id = :flight_id RETURNING*";
            const [results] = await sequelize.query(query, { replacements: {flight_id, flight_number, departure_airport, arrival_airport, departure_time, arrival_time, aircraft_id} });

            if(results.length === 0){
                return{
                    code: 404,
                    message: "Voo não encontrado!",
                }
            };

            return{
                code: 200,
                data: results[0],
                message: "Voo atualizado com sucesso!",
            };
        }catch(error){
            console.error("Erro ao atualizar voo: " ,error);
            throw{
                code: 500,
                message: "Erro ao atualizar o voo",
            };
        }
    }

    async deleteFlight(flight_id){
        try{
            const query = "DELETE from flight WHERE flight_id = :flight_id RETURNING *";
            const [results] = await sequelize.query(query, { replacements: {flight_id} });

            if(results.length === 0){
                return{
                    code: 404,
                    message: "Voo não encontrado!",
                }
            }

            return{
                code: 200,
                data: results[0],
                message: "Voo deletado com sucesso!"
            }
        }catch(error){
            console.error("Erro ao deletar voo: " ,error);
            throw{
                code: 500,
                message: "Erro ao deletar o voo",
            };
        }
    }
}

module.exports = FlightService;
