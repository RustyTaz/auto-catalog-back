const express = require("express");
const guestRouter = require("./routes/guest.route");
const brandRouter = require("./routes/brand.route");
const carRouter = require("./routes/car.route");

const PORT = process.env.PORT || 8080;

const app = express();
app.get("/", (req, res) => {
	res.send("Send reqeust...");
});

app.use(express.json());
app.use("/api", guestRouter);
app.use("/api", brandRouter);
app.use("/api", carRouter);

app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
