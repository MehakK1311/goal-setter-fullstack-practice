const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require('./config/db')
const {errorHandler}=require('./middleware/errorMiddleware')
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");


const PORT = process.env.PORT || 8081;

connectDB()

const app = express();
const router = express.Router();

// app.use(
//     cors({
//       credentials: true,
//       origin: "http://localhost:3000",
//     })
//   );

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', goalRoutes)
app.use('/api/user', userRoutes)


app.use(errorHandler)

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
