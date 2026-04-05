import express from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

// Book Routes
router.get("/", getAllBooks); // List Books
router.get("/:id", getBookById); // Book Details
router.post("/", createBook); // add New
router.put("/:id", updateBook); // Update Existing Book
router.delete("/:id", deleteBook); // Delete Existing Book

// Get Review
// Add Review
// Update Review
// Delete Review
// Similar Books
// Stock Availability

export default router;
