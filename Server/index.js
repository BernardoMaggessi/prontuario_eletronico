import express from "express";
import router from "./routes/router.js";
import db from "./database/database.js";
import pkg from "body-parser";

const app = express();
const {json,urlencoded} = pkg;

// Usando funções integradas do Express para parser JSON e URL
app.use(json());
app.use(urlencoded({ extended: true }));

// Usando o router que contém as rotas de todos os controllers

// Iniciando o servidor na porta 3000
app.listen(3000, function () {
    console.log("Listening on port 3000");
});

app.use("/", router);
