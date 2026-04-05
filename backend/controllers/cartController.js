// controller/cart.controller.js

import * as cartService from '../services/cartService.js';
// import CartModel from "../models/cartModel.js";

export const addToCart = async (req, res) => {
    try {
        const userId = req.user.id;     // from token
        const { bookId,quantity } = req.body;

        const cart = await cartService.addToCart(userId, bookId, quantity);

        return res.status(200).json({
            message: "Book added to cart",
            cart
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const allCartItems = async(req,res) =>{
     const cartItems = await cartService.allCartItems(req.user.id);
     return res.status(200).json({
            message: "All books in the cart",
            cartItems
        });
}

export const UpdateBookQuantity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { bookId, quantity } = req.body;

    const cart = await cartService.UpdateBookQuantity(
      userId,
      bookId,
      quantity
    );

    return res.status(200).json({
      message: "Cart (Book Quantity) updated",
      cart
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
