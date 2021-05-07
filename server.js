const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('shop_datbase', 'postgres', 'password', {
    host: '127.0.0.1',
    dialect: 'postgres'
});

const testDBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}



app.listen(3002, () => {
    console.log("Server running 3002");
    testDBConnection();
});