const db = require("../db.js");
const jwt = require('jsonwebtoken')
const {secret} = require('../config')
const {admin} = require('../admin.test.profile')


class AuthController {

    async loginAdmin(req, res) {
        try {

            let user = req.body;
            console.log(user);

            if (admin.login === req.body.login && admin.password === req.body.password) {
                let token = jwt.sign(user,secret,{expiresIn: "24h"}, );
                res.status(200).send({
                    signed_user: user,
                    token: token
                });
            } else {
                res.status(403).send({
                    errorMessage: 'Неправильный логин или пароль'
                });
            }
        } catch (e) {
            console.log(e);
            res.status(400).json({
                message: "Login error"
            });
        }

    }

    async testAdmin() {
        try {

        } catch (e) {
        }

    }
}

module.exports = new AuthController();
