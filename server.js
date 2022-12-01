require("dotenv").config();
const express = require('express');
const app= express();
const PORT=process.env.PORT;

app.get('/', (request, response) => {
    response.send('hello world i am listening to port 4321')
  });
  app.get('/dburl', (request, response) => {
    response.send(`My connection string is: ${process.env.DATABASE_URL}`)
  });
  app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`); //completely optional
  });