const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 7000;
const noteRouter = require('./routes/Notes');


app.use(cors());
app.use(express.json()); 
app.use('/', noteRouter);

// app.get("/",(req, res)=>{
//     res.send("this is server merge frontend");
// });

const uri = "mongodb+srv://ak12345:ak12345@cluster0.fbxzg0o.mongodb.net/Notex?retryWrites=true&w=majority";
// const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open',  () => {
    console.log('MongoDB connection established');
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});