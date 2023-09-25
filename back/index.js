const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package


const app = express();
const corsOptions = {
    origin: 'https://quiz-application-8qb4.vercel.app/',
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  };

const quizHandler = require('./quizHandler');
app.use(express.json());
app.use(cors(corsOptions));

app.use('/quiz',quizHandler);
const atlasURI = "mongodb+srv://tanimf1:ZhwgSPTEDQa0FckW@quiz.bxclclq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(atlasURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("Error connecting to MongoDB Atlas:", err));;

app.listen(4000,()=>{
    console.log('app is running on port 4000');
})







