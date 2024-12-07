const express = require("express");
const router = express.Router();
const SysUserController = require("../controllers/SysUserController");
const { authetincateToken } = require("../middleware/Auth");

router.get("/sysuser", authetincateToken, SysUserController.getSysUser);
router.post("/sysuser", authetincateToken, SysUserController.postSysUser);
router.put("/sysuser/:codigo", authetincateToken, SysUserController.putSysUser);
router.delete("/sysuser/:codigo", authetincateToken, SysUserController.deleteSysUser);

module.exports = router;