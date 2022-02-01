const db = require("../db.js");

class CarController {
	async createCar(req, res) {
		const { model, brand_id, horse_power, max_speed, acceleration, awd } =
			req.body;
		const newCar = await db.query(
			`INSERT INTO car (model,brand_id,horse_power,max_speed,acceleration,awd) values ($1,$2,$3,$4,$5,$6) RETURNING *`,
			[model, brand_id, horse_power, max_speed, acceleration, awd]
		);
		res.json(newCar.rows[0]);
	}

	async getOneCar(req, res) {
		const id = req.params.id;
		const car = await db.query(`SELECT * FROM car where id=$1`, [id]);
		res.json(car.rows);
	}

	// async getCarsByBrand(req, res) {
	// 	const brand_id = req.query.brand_id;
	// 	const car = await db.query(`SELECT * FROM car where brand_id=$1`, [
	// 		brand_id,
	// 	]);
	// 	res.json(car.rows);
	// }

	async getCars(req, res) {
		const cars = await db.query(`SELECT * FROM car`);
		res.json(cars.rows);
	}

	async deleteCar(req, res) {
		const id = req.params.id;
		const car = await db.query(`DELETE FROM car where id=$1`, [id]);
		res.json(car.rows[0]);
	}
}
module.exports = new CarController();
