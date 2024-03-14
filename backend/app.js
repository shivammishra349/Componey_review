const express = require('express');
const sequelize = require('./database/connection');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// let bodyParse=require('body-parser');

// app.use(bodyParse.urlencoded({extended:true}))

const adminRoute = require('./route/admin');
app.use(adminRoute);

sequelize.sync()
    .then((res) => {
        console.log(res);
        app.listen(1999);
    })
    .catch(err => {
        console.log(err);
    });
