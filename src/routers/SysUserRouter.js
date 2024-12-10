const express = require("express");
const router = express.Router();
const SysUserController = require("../controllers/SysUserController");

router.get("/sysuser", SysUserController.getSysUser.bind(SysUserController));
router.post("/sysuser", SysUserController.postSysUser.bind(SysUserController));
router.put("/sysuser/:id", SysUserController.putSysUser.bind(SysUserController));
router.delete("/sysuser/:id", SysUserController.deleteSysUser.bind(SysUserController));

module.exports = router;