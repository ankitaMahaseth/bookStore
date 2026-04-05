import * as bookService from "../services/bookService.js";

// Get All Books
export const getAllBooks = async (req, res) => {
  try {
    const result = await bookService.getAllBook(req.query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Book By Id
export const getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) {
      return res.status(204).json({ message: "Book Not Found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new Book
export const createBook = async (req, res) => {
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).json({ message: "Book Created", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Book Details
export const updateBook = async (req, res) => {
  try {
    const isUpdated = await bookService.updateBook(req.params.id, req.body);
    if (!isUpdated) {
      res.status(204).json({ message: "Book Not Found" });
    } else {
      res.status(200).json({ message: "Book Updated Successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Book
export const deleteBook = async (req, res) => {
  try {
    const isDeleted = await bookService.deleteBook(req.params.id);
    if (!isDeleted) {
      res.status(204).json({ message: "Book Not Found" });
    } else {
      res.status(200).json({ message: "Book Deleted Successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
