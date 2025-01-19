const express = require('express');
const {sequelize} = require('./utils/database');
const productRoutes = require('./routes/products');


const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

app.use('/products', productRoutes);

app.get('/', (request, response) => {
  response.write('Home Page');
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

