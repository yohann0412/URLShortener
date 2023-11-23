const connectToDatabase = require("../db/connect")
const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.port || 3000;
const routes = require("./routes")
const dotenv = require("dotenv");
dotenv.config();



const start = async () => {
        try{
             await connectToDatabase(process.env.MONGO_URI)
                 app.listen(port, () => {
                 console.log(`listening on port ${port}`)
                })
                
            }       
        catch (err){
           console.log("it didnt connect lol" + err)
            }
        }

start()


app.use(cors())
app.use(express.json())


app.use("/", routes);




