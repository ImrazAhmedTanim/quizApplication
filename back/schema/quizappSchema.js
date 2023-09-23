const mongoose = require ('mongoose');
const quizappSchema=mongoose.Schema(
{
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    
},
confirmPassword:{
    type:String,
    
},
agreedToTerms:{
    type:Boolean,
}


}
);
module.exports = quizappSchema;