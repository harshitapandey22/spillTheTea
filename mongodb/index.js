const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://neerajmain704_db_user:8WY0F6Dmya1Edw7G@spillthetea.qwavc4y.mongodb.net/")  // url ko neeraj se chupa ke rakhna h env file mein 
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email:    { type: String, required: true }
});
const teaSchema = new mongoose.Schema({
  username:{type: String,required: true},
  teaCaption :{type: String,required: true},
  teaDescription:{type:String,required:true}

});
const Tea = mongoose.model("Tea",teaSchema);

const User = mongoose.model("User", userSchema);

module.exports = {
  User ,
  Tea
};
