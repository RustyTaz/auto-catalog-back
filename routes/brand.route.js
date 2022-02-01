const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brand.controller");

router.post("/brand", brandController.createBrand);
router.get("/brand/:id", brandController.getOneBrand);
router.get("/brand", brandController.getBrands);

module.exports = router;
