const db = require("../db.js");

class GuestController {
	async createGuest(req, res) {
		const { name, surname, phone, email } = req.body;
		const newGuest = await db.query(
			`INSERT INTO guest_info (name,surname,phone,email) values ($1,$2,$3,$4) RETURNING *`,
			[name, surname, phone, email]
		);
		res.json(newGuest.rows[0]);
	}

	async getGuests(req, res) {
		const guests = await db.query(`SELECT * FROM guest_info`);
		res.json(guests.rows);
	}

	async getOneGuest(req, res) {
		const id = req.params.id;
		const guest = await db.query(`SELECT * FROM guest_info where id=$1`, [
			id,
		]);
		res.json(guest.rows[0]);
	}
	async updateGuest(req, res) {
		const { id, name, surname, phone, email } = req.body;
		const guest = await db.query(
			`UPDATE guest_info set name=$1, surname=$2, phone=$3, email=$4 where id=$5 RETURNING *`,
			[name, surname, phone, email, id]
		);
		res.json(guest.rows[0]);
	}
	async deleteGuest(req, res) {
		const id = req.params.id;
		const guest = await db.query(`DELETE FROM guest_info where id=$1`, [
			id,
		]);
		res.json(guest.rows[0]);
	}
}

module.exports = new GuestController();
