const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "DEFAULT_SECRET";

function createJWT(identify, obj) {
  return jwt.sign(
    {
      ...obj,
      identify
    },
    secret,
    { expiresIn: "24h" }
  );
}

function verifyJWT(token) {
  return jwt.verify(token, secret);
}

module.exports = { createJWT, verifyJWT };
