const express = require ('express');
const mongoose= require ('mongoose');
const cors = require('cors'); // Import the cors package

const app = express();

const quizHandler = require('./quizHandler');
app.use(express.json());
app.use(cors());

app.use('/quiz',quizHandler);
mongoose.connect('mongodb://localhost/quizApplication')
    .then(()=> console.log("connection successful"))
    .catch((err)=>console.log(err));

app.listen(4000,()=>{
    console.log('app is running on port 4000');
})