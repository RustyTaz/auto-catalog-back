const newsJson = require("../parser/news_content.json")

class NewsController {

    async getNews(req, res) {
        res.send(newsJson)
    }
}
module.exports = new NewsController();