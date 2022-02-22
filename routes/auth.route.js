const Router = require("express");
const router = new Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware")

router.post("/login", authController.loginAdmin);
router.get("/test",authController.testAdmin);

module.exports = router;
