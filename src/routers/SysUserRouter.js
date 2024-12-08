const express = require("express");
const router = express.Router();
const SysUserController = require("../controllers/SysUserController");
const { authetincateToken } = require("../middleware/Auth");

router.get("/sysuser", authetincateToken, SysUserController.getSysUser);
router.post("/sysuser", authetincateToken, SysUserController.postSysUser);
router.put("/sysuser/:id", authetincateToken, SysUserController.putSysUser);
router.delete("/sysuser/:id", authetincateToken, SysUserController.deleteSysUser);

module.exports = router;