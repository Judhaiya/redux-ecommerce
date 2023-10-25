export const unauthorisedError = () => {
  /**
   * assigning custom name,statusCode,message to Error instance
   * used for throwing unauthorized error
   * @returns {Object} error
   */
  const error = new Error();
  error.name = "unauthorized error";
  error.statusCode = 400;
  error.message = "session expired,please login";
  return error;
};

/**
 *
 * @param {string} msg
 * assigning custom name,statusCode,message to Error instance
 * used for throwing badRequest error
 * @returns {Object} error
 */

export const badRequest = (msg) => {
  const error = new Error();
  error.name = "bad request";
  error.statusCode = 400;
  error.message = msg;
  return error;
};
