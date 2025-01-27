import express from "express"
import fileUpload from "express-fileupload"
import cors from "cors"
import productRoute from './routes/ProductRoute.js'

const app = express()

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('public'))
app.use(productRoute)

app.listen(5000, () => console.log("Server Up And Running In Port 5000"))
