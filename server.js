require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');

app.listen({ port: process.env.SERVER_PORT }, async () => {
    console.log(`Server running on ${process.env.SERVER_PORT}`)
    try {
        await sequelize.authenticate();
        console.log('Connected to the Database Successfully');
    } catch (err) {
        console.err('Connection to the Database has failed', err);
    }
});