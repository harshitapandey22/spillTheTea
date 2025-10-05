const express = require("express");
const app = express();
app.use(express.json());
const PORT = 8080;

app.post('/signup',(req,res)=>{
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;



  if(!username){
    res.status(410).json({error:"no username"})
  }
  if(!password){
    res.status(410).json({error:"no password"})
  }
  if(!email){
    res.status(410).json({error:"no email"})
  }
  

})

