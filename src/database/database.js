const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize({
//     dialect: 'postgres',
//     host: 'aD0MisYhNI6b@ep-shiny-scene-a576hqzm.us-east-2.aws.neon.tech',
//     port: 5432,
//     username: 'bancop2_owner',
//     password: 'aD0MisYhNI6b',
//     database: 'bancop2',
//     logging: false,
//     define: {
//         timestamps: false,
//     }
// });

const sequelize = new Sequelize(
  "postgresql://bancop2_owner:aD0MisYhNI6b@ep-shiny-scene-a576hqzm.us-east-2.aws.neon.tech/bancop2?sslmode=require",
  {
    pool: {
      max: 10,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados foi bem sucedida!");
  })
  .catch((err) => {
    console.error("Não foi possível conectar ao banco de dados: ", err);
  });

module.exports = sequelize;
