const sequelize = require('../database/database');

class SysUserService {
    async getSysUser() {
        try {
            const [results, metadata] = await sequelize.query("SELECT * FROM sys_user");
            return {
                code: 200,
                data: results,
                message: "Usuários do sistema obtidos com sucesso!",
            };
        } catch (error) {
            console.error("Erro ao buscar usuário do sistema: ", error);
            throw {
                code: 500,
                message: "Erro ao obter os usuários do sistema",
            };
        }
    }

    async postSysUser(name, login_email, password, user_type) {
        try{
            const query = "INSERT INTO sys_user(name, login_email, password, user_type) VALUES (:name, :login_email, :password, :user_type) RETURNING *";
            const [results] = await sequelize.query(query, { replacements: {name, login_email, password, user_type} });
            return{
                code: 201,
                data: results,
                message: "Usuário do sistema cadastrado com sucesso!"
            }
        }catch (error){
            console.error("Erro ao cadastrar usuário do sistema: ", error);
            throw {
                code: 500,
                message: "Erro ao cadastrar usuário do sistema",
            };
        }
    }

    async putSysUser(id, name, login_email, password, user_type) {
        try{
            const query = "UPDATE sys_user SET name = :name, login_email = :login_email, password = :password, user_type = :user_type WHERE id = :id RETURNING *";
            const [results] = await sequelize.query(query, { replacements: {id, name, login_email, password, user_type} });

            if(results.length === 0){
                return{
                    code: 404,
                    message: "Usuário de sistema não encontrado!"
                }
            }
            return{
                code: 200,
                data: results,
                message: "Usuário de sistema atualizado com sucesso!"
            }
        }catch (error){
            console.error("Erro ao atualizar usuário do sistema: ", error);
            throw {
                code: 500,
                message: "Erro ao atualizar usuário do sistema",
            };
        }
    }

    async deleteSysUser(id) {
        try{
            const query = "DELETE FROM sys_user WHERE id = :id RETURNING *";
            const [results] = await sequelize.query(query, { replacements: {id} });

            if(results.length === 0){
                return{
                    code: 404,
                    message: "Usuário de sistema não encontrado!"
                }
            }
            return{
                code: 200,
                data: results,
                message: "Usuário de sistema deletado com sucesso!"
            }
        }catch (error){
            console.error("Erro ao deletar usuário do sistema: ", error);
            throw {
                code: 500,
                message: "Erro ao deletar usuário do sistema",
            };
        }
    }
}

module.exports = SysUserService;
