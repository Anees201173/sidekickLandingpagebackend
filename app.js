const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRoute);

mongoose
  .connect(
    "mongodb+srv://khananeesu304:cgEolXCDp6YmTZyr@cluster0.fjpnz.mongodb.net",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Welcome to landingpage API");
});

// ✅ Use Heroku's dynamic port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
