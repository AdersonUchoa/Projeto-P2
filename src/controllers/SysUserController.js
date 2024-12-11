const SysUserService = require('../services/SysUserService');

class SysUserController{
    async getSysUser(req, res){
        try{
            const result = await SysUserService.getSysUser();
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }

    async postSysUser(req, res){
        try{
            const {name, login_email, password, user_type} = req.body;
            const result = await SysUserService.postSysUser(name, login_email, password, user_type);
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }

    async putSysUser(req, res){
        try{
            const {id} = req.params;
            const {name, login_email, password, user_type} = req.body;
            const result = await SysUserService.postSysUser(id, name, login_email, password, user_type);
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }

    async deleteSysUser(req, res){
        try{
            const {id} = req.params;
            const result = await SysUserService.deleteSysUser(id);
            res.status(result.code).json(result);
        }catch (error){
            res.status(error.code || 500).json({message: error.message || "Erro interno do servidor!"});
        }
    }
}

module.exports = new SysUserController();