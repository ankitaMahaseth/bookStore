import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: Number,
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    category: { type: String, required: true },
    image: String,
    isDeleted: Boolean,
    createdAt: Date,
  },
  //   { timestamp: true },
);
const Book = mongoose.model("book", bookSchema);
// console.log(Book);

export default Book;
