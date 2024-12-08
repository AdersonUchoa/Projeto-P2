const sequelize = require('../database/database');

class PassengerService {
    async getPassenger() {
        try {
            const [results, metadata] = await sequelize.query("SELECT * FROM passenger");
            return {
                code: 200,
                data: results,
                message: "Passageiros(as) obtidos(as) com sucesso!",
            };
        } catch (error) {
            console.error("Erro ao buscar passageiro(a):", error);
            throw {
                code: 500,
                message: "Erro ao obter os passageiros(as)",
            };
        }
    }

    async postPassenger(first_name, last_name, birth_date, passport_number){
        try{
            const query = "INSERT into passenger(first_name, last_name, birth_date, passport_number) VALUES (:first_name, :last_name, :birth_date, :passport_number) RETURNING *";
            const [results] = await sequelize.query(query, { replacements: {first_name, last_name, birth_date, passport_number} });
            return{
                code: 201,
                data: results,
                message: "Passageiro(a) cadastrado(a) com sucesso!"
            }
        }catch (error){
            console.error("Erro ao cadastrar passageiro(a):", error);
            throw {
                code: 500,
                message: "Erro ao cadastrar o(a) passageiro(a)",
            };
        }
    }

    async putPassenger(passenger_id, first_name, last_name, birth_date, passport_number){
        try{
            const query = "UPDATE passenger SET first_name = :first_name, last_name = :last_name, birth_date = :birth_date, passport_number = :passport_number WHERE passenger_id = :passenger_id RETURNING *";
            const [results] = await sequelize.query(query, { replacements: {passenger_id, first_name, last_name, birth_date, passport_number} });

            if(results.length === 0){
                return{
                    code: 404,
                    message: "Passageiro(a) não encontrado(a)!"
                }
            }

            return{
                code: 200,
                data: results,
                message: "Passageiro(a) atualizado(a) com sucesso!"
            }
        }catch (error){
            console.error("Erro ao atualizar passageiro(a):", error);
            throw {
                code: 500,
                message: "Erro ao atualizar o(a) passageiro(a)",
            };
        }
    }

    async deletePassenger(passenger_id){
        try{
            const query = "DELETE FROM passenger WHERE passenger_id = :passenger_id RETURNING *";
            const [results] = await sequelize.query(query, { replacements: {passenger_id} });

            if(results.length === 0){
                return{
                    code: 404,
                    message: "Passageiro(a) não encontrado(a)!"
                }
            }
            return{
                code: 200,
                data: results,
                message: "Passageiro(a) deletado(a) com sucesso!"
            }
        }catch (error){
            console.error("Erro ao deletar passageiro(a):", error);
            throw {
                code: 500,
                message: "Erro ao deletar o(a) passageiro(a)",
            };
        }
    }
}

module.exports = PassengerService;
