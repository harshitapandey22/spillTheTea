const express = require("express");
const { User, Tea } = require("./mongodb");
const jwt = require("jsonWebToken");
const secretKey = "22harshita";
const app = express();
app.use(express.json());
const PORT = 3000;

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  if (!username) {
    return res.status(400).json({ msg: "no username" });
  }
  if (!password) {
    return res.status(400).json({ msg: "no password" });
  }
  if (!email) {
    return res.status(400).json({ msg: "no email" });
  }

  try {
    const checkingEmail = await User.findOne({ email });
    if (checkingEmail) {
      return res.status(400).json({ msg: "email already exists" });
    }
    const newUser = await User.create({ username, password, email });
    return res.status(200).json({ msg: "account created" });
  } catch (err) {
    return res.status(500).json({ msg: "server error", error: err.message });
  }
});

app.post('/signin',async(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;

  const checkingEmail =  await User.findOne({email});
  if(!checkingEmail){
    return res.status(401).json({msg:"user doesnt exist! sign up"});
  }
  if(password==checkingEmail.password){
    const userInput = {
      email,
      password
    }
    const currentToken = jwt.sign(userInput,secretKey);
    res.status(200).json({
      token : currentToken,
      msg : "You are signed in!"
    });
   // return res.status(200).json({msg:checkingEmail});
  }
  return res.status(409).json({msg:"wrong password"});

});

app.post('/createtea',async(req,res)=>{
  try{
    const teaCaption = req.body.teaCaption;
    const teaDescription = req.body.teaDescription;
    const token = req.get("authorization");  // instead of header.authorization write get  //gebrish lang
    const verifyingToken = jwt.verify(token,secretKey); 
    if (!teaCaption) {
      return res.status(400).json({ msg: "no teacapption" });
    }
    if (!teaDescription) {
      return res.status(400).json({ msg: "no teadescription" });
    }
    if (!token) {
      return res.status(400).json({ msg: "please sign in" });
    }

    if(verifyingToken){
      const gettingEmail = jwt.decode(token); //object part basically all the inputs
      const  email = gettingEmail.email;
      const newTea = await Tea.create({
        email,
        teaCaption,
        teaDescription
      })
      return res.status(200).json({
        msg:"teacreated ayayayayyaya"
      });
    } 
    else {
      return res.status(408).json({
        msg:"token not verified"
      });
    }
  }
  catch{
    return res.status(500).json({ msg: "server error" });
  }
});

app.listen(PORT, () => {
  console.log("server is running");
});