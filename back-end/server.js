require("dotenv").config();

const { connectDB } = require("./configs/db");

connectDB();

const express = require("express");
const cors = require("cors");

//TODO: import routes


//import error handler
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

// Cors
app.use(cors());

// Body Parser
app.use(express.json());

//TODO: Mount the route

// unhandled route
app.all("*", (req, res, next) => {
    const err = new Error("The route can not be found");
    err.statusCode = 404;
    next(err);
});
app.use(errorHandler);
const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
