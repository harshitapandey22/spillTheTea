const mongoose = require("mongoose"); //same shit as import 
mongoose.connect("mongodb+srv://pharshita588_db_user:mMJFTKg3rLWFEZy9@spillthetea.cnydyjk.mongodb.net/");  //uri call kr ke dabba initialise krna

const userSchema = new mongoose.Schema({
  username:{type:String, required:true},
  password:{type:String, required:true},
  email:{type:String, required:true} //end ke baad kuch nhi hehehhehehe

 
});

const User = mongoose.model("User",userSchema);

module.exports = {           // jab bhi kuch export krte hai uska 1st letter capital rakhna hota hai
  User
}