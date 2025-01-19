const express = require('express');
const sequelize = require('./utils/database');

const app = express();
const PORT = 3000;


app.get('/', (request, response) => {
    
    response.write(`request.url: ${request.url}\n`);
    response.write('Hello Word, this is Ivory.11\n');
    response.write('The best online tech store2122\n');
    response.end();
});

app.get('/stores', (request, response) => {
    response.write('List of all available stores');
    response.end();
})


app.listen(PORT, async () => {
    console.log('server started');
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
});

