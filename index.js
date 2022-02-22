const express = require("express");
const guestRouter = require("./routes/guest.route");
const brandRouter = require("./routes/brand.route");
const carRouter = require("./routes/car.route");
const newsRouter = require("./routes/news.route");
const authRouter= require("./routes/auth.route");
const browserObject = require('./parser/browser');
const scraperController = require('./parser/pageController');

const PORT = process.env.PORT || 8080;

const app = express();
let cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
	res.send("Send request...");
});

let browserInstance = browserObject.startBrowser();
scraperController(browserInstance);

app.use(express.json());
app.use("/api", guestRouter);
app.use("/api", brandRouter);
app.use("/api", carRouter);
app.use("/api", newsRouter);
app.use("/auth", authRouter);


const start=()=>{
	try{
		app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
	}
	catch (e){
		console.log(e)
	}
}
start();