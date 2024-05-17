'use strict';

require("dotenv").config();
const util = require("node:util");
const database = require("../../config/database");
const query = util.promisify(database.query).bind(database);
const bcrypt = require("bcrypt");
const authService = require("../services/auth-service");

exports.get = async() => {
    const sqlGetAll = `
        SELECT
            id, name, email
        FROM
            usuario
    `;
    return await query(sqlGetAll);
}

exports.register = async(name, email, password) => {
    try {
        const sqlCheckEmail = `
            SELECT
                COUNT(*) as count
            FROM
                usuario
            WHERE
                email = ?
        `;
        const [{ count }] = await query(sqlCheckEmail, [email]);
        if(count > 0) {
            throw new Error("O e-mail já está cadastrado");
        }

        const hash = await bcrypt.hash(password, process.env.SALT_KEY);
        
        const sqlInsertUser = `
            INSERT INTO
                usuario
                (id, name, email, password)
            VALUES
                (default, ?, ?, ?)
        `;

        await query(sqlInsertUser, [name, email, hash]);
    } catch(error) {
        throw new Error(error.message);
    }
}

async function validatePassword(user, password) {
    if(!user) throw new Error("Usuário inválido");

    return await bcrypt.compare(password, user.password);
}

exports.login = async(email, password, res) => {
    try {
        const sqlSelectAll = `
            SELECT * FROM
                usuario
            WHERE
                email = ?
        `;
        const user = (await query(sqlSelectAll, [email, password]))[0];

        if(!user || !(await validatePassword(user, password))) {
            throw new Error("E-mail ou senha inválidos");
        }

        const token = await authService.generateToken({
            email,
            user: user.id,
            name: user.name
        });

        return {
            status: true,
            token: token
        };
    } catch(error) {
        throw new Error(error.message);
    }
}