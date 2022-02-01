const Router = require("express");
const router = new Router();
const guestController = require("../controllers/guest.controller");

router.post("/guest", guestController.createGuest);
router.get("/guest", guestController.getGuests);
router.get("/guest/:id", guestController.getOneGuest);
router.put("/guest", guestController.updateGuest);
router.delete("/guest/:id", guestController.deleteGuest);

module.exports = router;
