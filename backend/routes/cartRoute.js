import express from "express";
import  authorizedUser from '../middlewares/authMiddleware.js';
import { addToCart, allCartItems, UpdateBookQuantity } from "../controllers/cartController.js";


const router = express.Router();

router.get("/", authorizedUser, allCartItems); //Get All cart Items
router.post("/add", authorizedUser, addToCart); // Add book to Cart
router.put('/update/:id', authorizedUser, UpdateBookQuantity) // Update Quantity
// router.delete('/delete/:id', removeCartItems) // Remove cart  items

export default router;
