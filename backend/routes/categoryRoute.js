import express from "express";
import { getAllCategories,categoryById  } from "../controllers/bookCategoryController.js";

const router = express.Router();

// category Routes
router.get("/", getAllCategories ); // List categories
router.get("/:id", categoryById ); // Category details

/*	GET /categories/{id}/books → Books by category
	GET /authors → List authors
	GET /authors/{id} → Author details
	GET /authors/{id}/books → Books by author
*/

export default router;