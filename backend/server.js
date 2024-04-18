const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT
const mongoid = process.env.MONGO_URL
const app = express()
const imageRouter = require('./routes/image.js')


// middlewars
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors({origin:true}))


// routes
app.use('/image',imageRouter)


// 404 page setup
app.use((req,res)=>{
    res.status(404).send(`404 page not found !`)
})


// database connection & port setting
mongoose
        .connect(`${mongoid}/imageupload`)
        .then(()=>{
            console.log(`successfully connected to mongodb`);
            app.listen(port,()=>{
                console.log(`server running on port ${port}`);
            })
        })
        .catch((err)=>{
            console.log(`error while connecting to mongodb - ${err}`);
        })