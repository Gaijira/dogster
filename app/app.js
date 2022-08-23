const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dogEndpoint = require('./endpoints/dogEndpoint')
require('dotenv').config()

//DB Connection
mongoose.connect(`mongodb+srv://${ process.env.DB_LOGIN }:${ process.env.DB_PASSWORD }@cluster0.ro8bz.mongodb.net/dogs_db?retryWrites=true&w=majority`)
  .then((res) => {console.log('\nConnected to DB')})
  .catch((err) => {console.log(err)})

app.use(express.json())
app.use('/dogs', dogEndpoint);

app.listen(3000, () => {
  console.log(`\nServer is up and listening on the:\n\nhttp://localhost:3000`)
})
