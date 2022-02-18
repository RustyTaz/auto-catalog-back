const Router = require("express");
const router = new Router();
const newsController = require("../controllers/news.controller");

router.get("/news", newsController.getNews);

module.exports = router;
