const sequelize = require('../database/database');

class AircraftService {
    async getAircraft() {
        try {
            const [results] = await sequelize.query("SELECT * FROM aircraft");
            return {
                code: 200,
                data: results,
                message: "Aviões obtidos com sucesso!",
            };
        } catch (error) {
            console.error("Erro ao buscar aviões: ", error);
            throw {
                code: 500,
                message: "Erro ao obter os aviões",
            }
        }
    }

    async postAircraft(model, manufacturer, capacity) {
        try {
            const query = `
                INSERT INTO aircraft (model, manufacturer, capacity)
                VALUES (:model, :manufacturer, :capacity)
                RETURNING *`;
            const [results] = await sequelize.query(query, {
                replacements: { model, manufacturer, capacity },
            });

            return {
                code: 201,
                data: results[0],
                message: "Avião criado com sucesso!",
            };
        } catch (error) {
            console.error("Erro ao cadastrar avião:", error);
            throw {
                code: 500,
                message: "Erro ao cadastrar o avião",
            };
        }
    }

    async putAircraft(aircraft_id, model, manufacturer, capacity) {
        try {
            const query = `
                UPDATE aircraft
                SET model = :model, manufacturer = :manufacturer, capacity = :capacity
                WHERE aircraft_id = :aircraft_id
                RETURNING *`;
            const [results] = await sequelize.query(query, {
                replacements: { aircraft_id, model, manufacturer, capacity },
            });

            if (results.length === 0) {
                return {
                    code: 404,
                    message: "Avião não encontrado para atualização!",
                };
            }

            return {
                code: 200,
                data: results[0],
                message: "Avião atualizado com sucesso!",
            };
        } catch (error) {
            console.error("Erro ao atualizar avião:", error);
            throw {
                code: 500,
                message: "Erro ao atualizar o avião",
            };
        }
    }

    async deleteAircraft(aircraftId) {
        try {
            const query = `DELETE FROM aircraft WHERE aircraft_id = :aircraftId RETURNING *`;
            const [results] = await sequelize.query(query, {
                replacements: { aircraftId },
            });

            if (results.length === 0) {
                return {
                    code: 404,
                    message: "Avião não encontrado para exclusão!",
                };
            }

            return {
                code: 200,
                data: results[0],
                message: "Avião excluído com sucesso!",
            };
        } catch (error) {
            console.error("Erro ao excluir avião:", error);
            throw {
                code: 500,
                message: "Erro ao excluir o avião",
            };
        }
    }
}

module.exports = new AircraftService();
