const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/nosql-social-network-api')
.then(() => {
    console.log('Connected to MongoDb');
})
.catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));