const sequelize = require('../src/database/database');

class MedicoService {
    async getMedicos() {
        try {
            const [results, metadata] = await sequelize.query("SELECT * FROM medico");
            return {
                code: 200,
                data: results,
                message: "Médicos obtidos com sucesso!",
            };
        } catch (error) {
            console.error("Erro ao buscar médicos:", error);
            throw {
                code: 500,
                message: "Erro ao obter os médicos",
            };
        }
    }
}

module.exports = MedicoService;
