const db = require("../db.js");

class BrandController {
	async createBrand(req, res) {
		const { name } = req.body;
		const newBrand = await db.query(
			`INSERT INTO brand (name) values ($1) RETURNING *`,
			[name]
		);
		res.json(newBrand.rows[0]);
	}
	async getOneBrand(req, res) {
		const id = req.params.id;
		const brand = await db.query(`SELECT * FROM brand where id=$1`, [id]);
		res.json(brand.rows);
	}
	async getBrands(req, res) {
		const brands = await db.query(`SELECT * FROM brand`);
		res.json(brands.rows);
	}
}
module.exports = new BrandController();
