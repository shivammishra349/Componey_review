let Sequelize = require('sequelize');

let sequelize = new Sequelize('review','root','shivam12',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;