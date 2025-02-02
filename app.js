const express = require('express');
const {sequelize} = require('./utils/database');
const productRoutes = require('./routes/products');
const path = require('path');

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

app.use('/products', productRoutes);

app.get('/', (request, response) => {
  response.render('page', {title: 'Hello Hompage.'});
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

