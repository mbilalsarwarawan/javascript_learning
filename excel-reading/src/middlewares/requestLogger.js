const requestLogger = (req, res, next) => {
    console.info(`Request: ${req.method} ${req.originalUrl}`, { timestamp: new Date().toISOString() });
    next();
  };
  
  export default requestLogger;