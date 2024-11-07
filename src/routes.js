const express = require("express");
import { PrismaClient } from './../prisma/generated/client/index.d';
const routes = express.Router();
const prisma = new PrismaClient();

// Create a new task
routes.post("/tarefas", async (request, response) => {
  const { nome, custo, dataLimite, ordemApresentacao } = request.body;

  // Ensure custo is a number
  const parsedCusto = parseFloat(custo);
  if (isNaN(parsedCusto)) {
    return response.status(400).json("Invalid value for 'custo'");
  }

  // Ensure ordemApresentacao is an integer
  const parsedOrdemApresentacao = parseInt(ordemApresentacao);
  if (isNaN(parsedOrdemApresentacao)) {
    return response.status(400).json("Invalid value for 'ordemApresentacao'");
  }

  // Ensure dataLimite is a valid date
  const parsedDataLimite = new Date(dataLimite);
  if (isNaN(parsedDataLimite.getTime())) {
    return response.status(400).json("Invalid value for 'dataLimite'");
  }

  const tarefas = await prisma.tarefas.create({
    data: {
      nome,
      custo: parsedCusto,
      dataLimite: parsedDataLimite,
      ordemApresentacao: parsedOrdemApresentacao,
    },
  });
  return response.status(201).json(tarefas);
});

// Retrieve all tasks
routes.get("/tarefas", async (request, response) => {
  const tasks = await prisma.tarefas.findMany();
  return response.status(200).json(tasks);
});

// Update a task
routes.put("/tarefas/:id", async (request, response) => {
  const { id } = request.params;
  const { nome, custo, dataLimite, ordemApresentacao } = request.body;

  if (!id) {
    return response.status(400).json("Id is Mandatory");
  }

  const taskAlreadyExists = await prisma.tarefas.findUnique({ where: { id: parseInt(id) } });

  if (!taskAlreadyExists) {
    return response.status(404).json("Task not exist");
  }

  const updatedTask = await prisma.tarefas.update({
    where: { id: parseInt(id) },
    data: {
      nome,
      custo: parseFloat(custo),
      dataLimite: new Date(dataLimite),
      ordemApresentacao: parseInt(ordemApresentacao)
    },
  });
  return response.status(200).json(updatedTask);
});

// Delete a task
routes.delete("/tarefas/:id", async (request, response) => {
  const { id } = request.params;

  const intId = parseInt(id);

  if (!intId) {
    return response.status(400).json("Id is Mandatory");
  }

  const taskAlreadyExists = await prisma.tarefas.findUnique({
    where: { id: intId },
  });

  if (!taskAlreadyExists) {
    return response.status(404).json("Task not exist");
  }

  await prisma.tarefas.delete({ where: { id: intId } });
  return response.status(200).send();
});

module.exports = routes;