const logger = require("./logger");

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500; // Default to 500 for internal server error
  const message = err.message || "Something went wrong!";
  
  // Log errors with status and additional details (e.g., request method and URL)
  if (status >= 400) {
    logger.error(`${status} - ${req.method} ${req.originalUrl} - ${message}`);
  }

  // Send the error response to the client
  res.status(status).json({
    success: false,
    message: message,
    error: status >= 500 ? "Internal Server Error" : message, // For 500 errors, hide internal details
  });
};

module.exports = errorHandler;
