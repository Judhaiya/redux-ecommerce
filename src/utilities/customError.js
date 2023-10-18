 export const unauthorisedError = ()=>{
  const error = new Error()
  error.name = "unauthorized error";
  error.statusCode = 400;
  error.message = "session expired logged out";
  return error
 }

 export const badRequest = (msg)=>{
    const error = new Error();
    error.name = "bad request";
    error.statusCode = 400;
    error.message = msg
    return error;
 }