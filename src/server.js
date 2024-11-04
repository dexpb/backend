const PORT = process.env.PORT || 3333;
const express = require("express")
const routes = require("./routes")
const app = express()
const cors =  require("cors")

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));