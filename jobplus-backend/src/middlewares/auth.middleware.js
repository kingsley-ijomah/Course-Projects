const db = require('../config/database');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const auth = async (req, res, next) => {
  // Retrieve session token
  const token = req.session.token;

  // If token is not present, return error
  if (!token) {
    return res.status(401).send({ error: 'Please Authenticate' });
  }

  try {
    // decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Retrieve user from database
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1',
      [decoded.id]
    );

    // If user is not found, return error
    if (!rows[0]) {
      throw new Error('User not found');
    }

    // Attach user to request object
    req.user = rows[0];

    // Continue to next middleware
    next();
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
}

module.exports = auth;