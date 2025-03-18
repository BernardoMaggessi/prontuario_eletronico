import express from "express";
import router from "./routes/router.js";
import db from "./database/database.js";

const app = express();

// Usando funções integradas do Express para parser JSON e URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Usando o router que contém as rotas de todos os controllers
app.use("/", router);

// Iniciando o servidor na porta 3000
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
