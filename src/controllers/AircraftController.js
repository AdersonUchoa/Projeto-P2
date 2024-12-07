const sequelize = require('../src/database/database');
const ResponseModel = require('../models/ResponseModel');
const success = { code: 200 };
const notFound = { code: 404 };

exports.getAircraft = async (req, res) => {
    try {
        const pool = await poolPromise;
        const queryAircraft = await pool.request().query(
            "select model, manufacturer, capacity from aircraft"
        );
        const response = new ResponseModel(success.code, queryMedico.recordset, "Aviões obtidos com sucesso!");
        return res.status(success.code).send(response);
    } catch (error) {
        const response = new ResponseModel(notFound.code, 
            "",
            "Erro ao obter os aviões!"
        );
        return res.status(notFound.code).send(response);
    }
};

module.exports = new AircraftController();