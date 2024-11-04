const express = require("express")
const routes = require("./routes")
const app = express()
const cors =  require("cors")
const port = process.env.PORT || 3333;

app.use(cors())
app.use(express.json())
app.use(routes)
app.get("/tarefas", (req, res) => {
})

app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app