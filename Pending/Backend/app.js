import express from 'express'
import router from './auth.js'
import mongodb from './mongo.js'
import cors from 'cors'
const app = express()
const port = 5200
//cors-------------------------------------------------------
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",     
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json())
app.use("/files",express.static("files"))
app.use("/Pending", router)   
mongodb().then(()=> {
    app.listen(port, () => {
        console.log("Server is running")
    })
})

