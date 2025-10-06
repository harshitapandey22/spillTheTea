const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://neerajmain704_db_user:8WY0F6Dmya1Edw7G@spillthetea.qwavc4y.mongodb.net/");

const userSchema = new mongoose.Schema({
  username:{type:String},
  password:{type:String},
  email:{type:String},
})

const User =  mongoose.model("User",userSchema);
module.exports = {
  User
}
