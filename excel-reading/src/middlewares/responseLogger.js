const responseLogger = (req, res, next) => {
    const oldSend = res.send;
    const start = Date.now();
    res.send = function (data) {
      const duration = Date.now() - start;
      console.info(`Response: ${req.method} ${req.originalUrl}`, {
        status: res.statusCode,
        duration: `${duration}ms`,
        timestamp: new Date().toISOString(),
      });
      oldSend.apply(res, arguments);
    };
    next();
  };
  
  export default responseLogger;