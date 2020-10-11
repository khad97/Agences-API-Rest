const express = require('express');
const connectDB = require('./DataBase/Connection')
const app = express();
require('dotenv/config');


connectDB();
app.use(express.json({ extended: false }));
app.use('/api/agenceModel', require('./API/Agence'));

const port = process.env.Port
app.listen(port, () => {
    console.log("server started");
});