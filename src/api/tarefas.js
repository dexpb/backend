// src/api/tarefas.js

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Rota para criar uma nova tarefa
app.post("/", async (req, res) => {
  // Lógica para criar tarefa...
});

// Rota para obter todas as tarefas
app.get("/", async (req, res) => {
  // Lógica para obter tarefas...
});

// Rota para atualizar uma tarefa
app.put("/:id", async (req, res) => {
  // Lógica para atualizar tarefa...
});

// Rota para deletar uma tarefa
app.delete("/:id", async (req, res) => {
  // Lógica para deletar tarefa...
});

// Exportar o app como uma função serverless
module.exports = (req, res) => app(req, res);
