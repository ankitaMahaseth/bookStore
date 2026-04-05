import express from "express";
import {
    registerUser,
    loginUser,
    dashboard,
    
    getAllUsers,
    deleteUser
} from "../controllers/userController.js";
const router = express.Router();

import  authorizedUser from '../middlewares/authMiddleware.js';


router.post("/register", registerUser); // Register New user ( POST /users/register )
router.post("/login", loginUser); // Login User ( POST /users/login )

// LogOut user ( POST /users/logout )
router.get('/dashboard', authorizedUser, dashboard) // Authorized User Logged-in ( DASHBOARD )
// (PUT /users/profile) Update profile
// (DELETE /users/profile ) Delete account

// ( GET /users/orders ) User order history
// ( GET /users/orders/{id} ) Order details

/* ( POST /users/wishlist )  Add book to wishlist
 ( GET /users/wishlist ) Get wishlist
 ( DELETE /users/wishlist/{bookId} ) Remove from wishlist

 ( GET /users/address ) Get saved addresses
 ( POST /users/address ) Add address
 ( PUT /users/address/{id}) Update address
 ( DELETE /users/address/{id}) Delete address

 ( GET /users/wallet ) Wallet balance
 ( POST /users/wallet/add ) Add money
 ( GET /users/rewards )Reward points
 ( POST /users/rewards/redeem ) Redeem rewards*/


router.get('/', getAllUsers) // List of User Details
router.delete('/:id', deleteUser) // Delete user By id


export default router;