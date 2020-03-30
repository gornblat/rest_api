const express = require('express');
const mongoose = require ('mongoose');

const app = express();


// ROUTES
app.get('/', (req,res) => {
    res.send('We are at home');
});

app.get('/posts', (req,res) => {
    res.send('We are at posts');
});

// CONNECT TO DB

mongoose.connect("mongodb+srv://george:surrenderr0se@tutorial-19kto.gcp.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true} , ()=> console.log('connected to DB!'), );


// how do we start listening to the server?
app.listen(3000);

