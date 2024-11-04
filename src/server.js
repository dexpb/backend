const express = require("express")
const routes = require("./routes")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.get("/tarefas", (req, res) => {
  // Insira aqui a lógica para responder ao endpoint /tarefas
  res.status(200).send("Endpoint /tarefas funcionando")
})

// Em vez de app.listen, exporte o app como uma função
module.exports = app
