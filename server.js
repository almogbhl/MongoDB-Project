require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
    const user_router = require('./routes/user_router')

const { NODE_ENV,API_PORT,API_HOST } = process.env;

const app = express();
mongoose.connect('mongodb://localhost/test');

app.use(express.json())

app.use( '/api/user', user_router )

app.get('/', (req,res) => {
    res.status(200).send('Hello Express!')
})

//connect to mongo db
db.connect();

//start the express api server
app.listen(API_PORT,API_HOST, (error) => {
    if(error) p.error(error)
    else p.magenta(`express api is live  ✨ ⚡ http://${API_HOST}:${API_PORT} ✨ ⚡`)
});