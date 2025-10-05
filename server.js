const express = require("express");
const { User } = require("./mongodb");
const app = express();
app.use(express.json());
const PORT = 3000;  //

app.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;

  if (!username) return res.status(410).json({ error: "No username" });
  if (!password) return res.status(410).json({ error: "No password" });
  if (!email) return res.status(410).json({ error: "No email" });


  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(401).json({ msg: "Email already exists" });
    }

    const newUser = await User.create({ username, password, email });

    console.log("New user created:", newUser);

    return res.status(200).json({ msg: "Account created" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/testing', (req,res) => {
  res.status(200).json({msg : "working"});
})

app.listen(PORT, () => {
  console.log("Server is running");
});
