// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import userModel from'../models/userModel.js';

const authorizedUser = async (req, res, next) => {

    try {
      const authHeader = req.headers.authorization;

        // Check if header exists and is string
        if (!authHeader || typeof authHeader !== "string") {
            return res.status(401).json({ message: "Authorization header missing or invalid" });
        }

        if (!authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Token must start with Bearer" });
        }
      const token = authHeader.split(" ")[1];
     
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      req.user = decoded; //store Decoded Data
      // console.log(req.user.id)
      next();
      // return req.user;

    } catch (error) {
      return res.status(401).json({ message: 'invalid token' });
    }
  };

export default authorizedUser;
