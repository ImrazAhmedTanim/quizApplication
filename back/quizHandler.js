const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcryptjs');

const quizappSchema = require('./schema/quizappSchema');

const Quiz = new mongoose.model('Quiz',quizappSchema);


router.post('/api/signup',async(req,res)=>{
    try{
        const bcryptpass = await bcrypt.hash(req.body.password, 10);
        const confirmBcryptpass = await bcrypt.hash(req.body.confirmPassword, 10);
       const newQuiz = new Quiz({
            name: req.body.name,
            email: req.body.email,
            password: bcryptpass,
            confirmPassword:confirmBcryptpass,
            agreedToTerms:req.body.agreedToTerms
           
            
        
        });
        await newQuiz.save();
        res.status(200).json({
            message:'signup successful',
            data : newQuiz
        });
    }
    catch{
        res.status(500).json({
            message:'signup failed tanim'
        });
    }

});

router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Query your database to find a user with the provided email
    const user = await Quiz.findOne({ email });
  
    if (!user) {
      // If no user is found, send an error response
      return res.status(401).json({ message: 'Invalid login credentials' });
    }
  
    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      // If passwords don't match, send an error response
      return res.status(401).json({ message: 'Invalid login credentials' });
    }
  
    // If both email and password are correct, you can send a success response
    res.status(200).json({ message: 'Login successful', user });
  });
  

module.exports = router;
