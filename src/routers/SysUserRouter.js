const express = require("express");
const router = express.Router();
const SysUserController = require("../controllers/SysUserController");

router.get("/sysuser", SysUserController.getSysUser);
router.post("/sysuser", SysUserController.postSysUser);
router.put("/sysuser/:id", SysUserController.putSysUser);
router.delete("/sysuser/:id", SysUserController.deleteSysUser);

module.exports = router;