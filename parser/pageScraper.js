const cheerio = require("cheerio");
const fs = require("fs");
const userAgent = require('user-agents');

articleMas = [];

const scraperObject = {
    url: 'https://yandex.ru/news/rubric/auto', async scraper(browser) {

        let page = await browser.newPage();
        await page.setUserAgent(userAgent.toString());
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        const content = await page.content();
        //console.log(content)
        const selector = cheerio.load(content);
        selector("div.mg-grid__col_xs_4").slice(0, 20).each((i, el) => {
            let article = {};

            let title = selector(el).find(".mg-card__title").text();
            if (typeof (title) !== "undefined" && (title !== "")) {
                article.title = title;
            }

            const url = selector(el).find("a").attr("href");
            if (typeof (url) !== "undefined" && (url !== "")) {
                article.url = url;
            }

            const description = selector(el).find(".mg-card__annotation").text();
            if (typeof (description) !== "undefined" && (description !== "")) {
                article.description = description;
            }

            let urlToImage = selector(el).find(".mg-card__media-block_type_image").attr('style');
            let newString;
            if (typeof (urlToImage) !== "undefined" && (urlToImage !== "")) {
                newString = urlToImage.slice(21, urlToImage.length - 1);
                article.urlToImage = newString;
            }

            const author = selector(el).find(".mg-card__source-link").text();
            if (typeof (author) !== "undefined" && (author !== "")) {
                article.author = author;
            }

            const publishedAt = selector(el).find(".mg-card-source__time").text();
            if (typeof (publishedAt) !== "undefined" && (publishedAt !== "")) {
                article.publishedAt = publishedAt;
            }



            articleMas.push(article);

        });

        selector("div.mg-grid__col_xs_8").slice(0, 20).each((i, el) => {
            let article = {};

            let title = selector(el).find(".mg-card__title").text();
            if (typeof (title) !== "undefined" && (title !== "")) {
                article.title = title;
            }

            const url = selector(el).find("a").attr("href");
            if (typeof (url) !== "undefined" && (url !== "")) {
                article.url = url;
            }

            const description = selector(el).find(".mg-card__annotation").text();
            if (typeof (description) !== "undefined" && (description !== "")) {
                article.description = description;
            }

            let urlToImage = selector(el).find(".mg-card__media-block_type_image").attr('style');
            let newString;
            if (typeof (urlToImage) !== "undefined" && (urlToImage !== "")) {
                newString = urlToImage.slice(21, urlToImage.length - 1);
                article.urlToImage = newString;
            }

            const author = selector(el).find(".mg-card__source-link").text();
            if (typeof (author) !== "undefined" && (author !== "")) {
                article.author = author;
            }

            const publishedAt = selector(el).find(".mg-card-source__time").text();
            if (typeof (publishedAt) !== "undefined" && (publishedAt !== "")) {
                article.publishedAt = publishedAt;
            }
            articleMas.push(article);

        });

        const data = JSON.stringify(articleMas);

        fs.writeFile('./parser/news_content.json', data, 'utf8', (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            } else {
                console.log(`File is written successfully!`);
            }
        });


    }
}

module.exports = scraperObject;
