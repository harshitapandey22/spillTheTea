const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://neerajmain704_db_user:8WY0F6Dmya1Edw7G@spillthetea.qwavc4y.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email:    { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User
};