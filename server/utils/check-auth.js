const { AuthenticationError } = require("apollo-server");

const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = (context) => {
  // context = { ... headers }
  const authHeader = context.req.headers.authorization;
  console.log(context.req.headers);
  if (authHeader) {
    // Bearer ....
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        console.log("token", token);
        console.log("secret key", SECRET_KEY);
        const user = jwt.verify(token, SECRET_KEY);
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
};
