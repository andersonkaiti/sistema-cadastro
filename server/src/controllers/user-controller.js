'use strict';

const repository = require("../repositories/user-repository");

exports.get = async(req, res) => {
    try {
        const data = await repository.get();
        res.status(200).json(data);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

exports.getOne = async(req, res) => {
    try {
        const { id } = req.body;
        const data = await repository.getOne(id);
        res.status(200).json(data);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

exports.update = async(req, res) => {
    try {
        const { name, email, password, id } = req.body;
        await repository.update(name, email, password, id);
        res.status(200).json({
            status: true,
            message: "Usuário atualizado com sucesso!"
        });
    } catch(error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

exports.register = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        await repository.register(name, email, password);
        res.status(201).json({
            status: true,
            message: "Usuário cadastrado com sucesso!"
        });
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const data = await repository.login(email, password, res);
        res.status(200).json({
            status: data.status,
            message: "Usuário logado com sucesso!",
            token: data.token
        });
    } catch(error) {
        console.log(error.message);
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}