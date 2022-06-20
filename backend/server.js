const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("../backend/middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

//run the DB
connectDB();

const app = express();

//adding middleware (to accepting body data) - middleware are functions that execute during the req & res cycle
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//API url
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//insert underneath the routes
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
