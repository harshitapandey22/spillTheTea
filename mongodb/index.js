const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pharshita588_db_user:mMJFTKg3rLWFEZy9@spillthetea.cnydyjk.mongodb.net/?retryWrites=true&w=majority&appName=spillthetea")
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
