const { describe, before, after, it } = require("node:test");
const { deepStrictEqual, strictEqual, ok } = require("node:assert");

const BASE_URL = `http://localhost:15761`;

describe("API workflow", () => {
    let _server = {};

    before(async() => {
        _server = require("../../bin/server");
        await new Promise(resolve => _server.once("listening", resolve));
    });

    after(done => _server.close(done));

    // cadastro de e-mail
    it("O usuário não deve ser capaz de registrar a sua conta na rota /users/register caso não especifique algum campo", async() => {
        const form = {
            name: undefined,
            email: "teste@example.com",
            password: "teste"
        };

        const request = await fetch(BASE_URL + "/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
        strictEqual(request.status, 500);
        const response = await request.json();
        strictEqual(response.status, false);
        ok(response.message);
    });
    
    it("O usuário deve ser capaz de registrar a sua conta na rota /users/register", async() => {
        const form = {
            name: "teste",
            email: "teste@example.com",
            password: "teste"
        };

        const request = await fetch(BASE_URL + "/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
        strictEqual(request.status, 201);
        const response = await request.json();
        deepStrictEqual(response, {
            status: true,
            message: "Usuário cadastrado com sucesso!"
        });
    });

    it("O usuário não deve ser capaz de registrar a sua conta na rota /users/register caso o e-mail já esteja cadastrado", async() => {
        const form = {
            name: "teste",
            email: "teste@example.com",
            password: "teste"
        };

        const request = await fetch(BASE_URL + "/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
        strictEqual(request.status, 500);
        const response = await request.json();
        strictEqual(response.status, false);
        ok(response.message);
    });


    it("O usuário deve ser capaz de solicitar o nome e o email de todos os usuários cadastrados", async() => {
        const request = await fetch(BASE_URL + "/users/", {
            method: "GET"
        });
        strictEqual(request.status, 200);
    });

    it("O usuário não deve ser capaz de realizar um login no sistema e receber um token de autenticação", async() => {
        const form = {
            email: "",
            password: ""
        };

        const request = await fetch(BASE_URL + "/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
        strictEqual(request.status, 500);
        const response = await request.json();
        strictEqual(response.status, false);
        ok(response.message);
    });

    it("O usuário deve ser capaz de realizar um login no sistema e receber um token de autenticação", async() => {
        const form = {
            email: "teste@example.com",
            password: "teste"
        };

        const request = await fetch(BASE_URL + "/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
        strictEqual(request.status, 200);
        const response = await request.json();
        strictEqual(response.status, true);
        strictEqual(response.message, "Usuário logado com sucesso!");
        ok(response.token);
    });
});