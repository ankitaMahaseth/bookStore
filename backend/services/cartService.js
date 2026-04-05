// service/cart.service.js
import CartModel from "../models/cartModel.js";
import BookModel from "../models/bookModel.js";

export const addToCart = async (userId, bookId, quantity) => {

    //  Check if book exists and stock available

     const book = await BookModel.findById(bookId);

        if (!book) {
            throw new Error("Book not found");
        }
          if (book.stock < quantity) {
            throw new Error("Not enough stock available");
        }

    let cart = await CartModel.findOne({ user: userId });

    // If cart not exist → create new
    if (!cart) {
        cart = new CartModel({
            user: userId,
            items: [{ book: bookId, quantity}]
        });
    } else {
        // Check if book already exists in cart
        const bookIndex = cart.items.findIndex(
            item => item.book.toString() === bookId
        );

        if (bookIndex > -1) {
            cart.items[bookIndex].quantity += quantity;
        } else {
            cart.items.push({ book: bookId, quantity: quantity });
        }

    }

      //  Decrease stock
        await BookModel.findByIdAndUpdate(
             bookId,
            { $inc: { stock: -quantity } },
            { new: true }
  );
    await cart.save();
    return cart;
};

export const allCartItems = async(userId) =>{

    const allCartItems = await CartModel.findOne({ user: userId });
    return allCartItems
}

// Update Cart Quantity

export const UpdateBookQuantity = async (userId, bookId, quantity) => {

  const cart = await CartModel.findOne({ user: userId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  const item = cart.items.find(
    item => item.book.toString() === bookId
  );

  if (!item) {
    throw new Error("Book not found in cart");
  }

  item.quantity = quantity;

  await cart.save();

  return cart;
};

