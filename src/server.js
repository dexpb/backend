const express = require("express")
const routes = require("./routes")
const app = express()
const cors =  require("cors")

app.use(cors())
app.use(express.json())
app.use(routes)
app.get("/tarefas", (req, res) => {
})

app.listen(3000, () => console.log("server up 3000"))

module.exports = app
