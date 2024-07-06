const express       = require("express")
const cors          = require("cors")
const app           = express()

const db            = require("../data/dbConn.js")


const productRouter = require('../routes/productRoutes.js')
const port          = 3030


app.use(cors())
app.use(express.json())


app.get("/", (req,res)=>{
    res.send('HOME');
}) 

app.use("/productos", productRouter) 

const dataConnect = async ()=>{
    try {
        await db.authenticate()
        // await db.sync()
        console.log('DB SUCESS');
    } catch (error) {
        console.log('Error conecting DB',error);
    }
}

app.listen(port, ()=>{
    dataConnect()
    console.log(`Port: ${port}`);
}) 