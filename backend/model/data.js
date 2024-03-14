const Sequelize=require('sequelize');

const sequelize=require('../database/connection')

const table=sequelize.define('review',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    pros:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cos:{
        type:Sequelize.STRING,
        allowNull:false
    },
    rate:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports=table