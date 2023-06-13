const express = require("express");
const dotenv = require("dotenv").config();

const {errorHandler}=require('./middleware/errorMiddleware')

const PORT = process.env.PORT || 5000;
const goalRoutes = require("./routes/goalRoutes");



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

app.use(errorHandler)

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
