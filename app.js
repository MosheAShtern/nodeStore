const express = require('express');
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


app.listen(PORT, () => {
    console.log('server started');
});

