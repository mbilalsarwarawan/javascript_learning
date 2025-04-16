export const formatResponse = (data, message = 'Success') => {
    return {
      status: 'success',
      message,
      data,
    };
  };
  
  export const formatError = (message = 'Something went wrong', code = 500) => {
    return {
      status: 'error',
      code,
      message,
    };
  };
  