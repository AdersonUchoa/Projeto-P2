const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: '123',
    database: 'demo_flight',
    logging: false,
    define: {
        timestamps: false,
    }
});

sequelize.authenticate().then(() => {
        console.log('Conexão com o banco de dados foi bem sucedida!');
    }).catch(err => {
        console.error('Não foi possível conectar ao banco de dados: ', err);
    });

module.exports = sequelize;