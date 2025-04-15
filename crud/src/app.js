// app.js or server.js
const express = require("express");
const { requestLogger } = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
connectDB();
const app = express();

// Middleware
app.use(express.json());
app.use(requestLogger);

// Your routes here
app.use("/api/auth", require("./routes/authRoutes"));

// 404 Handler
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Error Handler (at the end)
app.use(errorHandler);

module.exports = app;
