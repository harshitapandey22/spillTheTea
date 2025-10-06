const express = require("express");
const {User} = require("./mongodb");
const app = express();
app.use(express.json());
const PORT = 8080;

app.post("/signup", async (req,res)=>{
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  if(!username){
    return res.status(410).json({msg:"no username"});
  }
  if(!password){
    return res.status(410).json({msg:"no password"});
  }
  if(!email){
    return res.status(410).json({msg:"no email"});
  }

  const checkingEmail = await User.findOne({email})
  if(checkingEmail){
    return res.status(400).json({msg:"email already exists"});
  }
  const newUser = await User.create({username,password,email});
  return res.status(200).json({msg:"account created"});

})

app.listen(PORT,(req,res)=>{
  console.log("server is running");
})