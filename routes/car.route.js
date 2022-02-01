const Router = require("express");
const router = new Router();
const carController = require("../controllers/car.controller");

router.post("/car", carController.createCar);
router.get("/car/:id", carController.getOneCar);
// router.get("/car", carController.getCarsByBrand);
router.get("/car", carController.getCars);
router.delete("/car/:id", carController.deleteCar);

module.exports = router;
