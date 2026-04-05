import * as bookCategoryService from '../services/bookCategoryService.js';

// Get All book categories
export const getAllCategories = async (req, res) => {
    try {
        const bookCategories = await bookCategoryService.getAllCategories();
        // console.log(bookCategories)
        res.status(200).json(bookCategories);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get category By Id
export const categoryById = async (req, res) => {
    try {
        const category = await bookCategoryService.categoryById(req.params.id);
        if (!category) {
            return res.status(204).json({ message: 'Category Not Found' })
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Create new Book
/*export const createBook = async (req, res) => {
    try {
        const book= await bookCategoryservice.createBook(req.body);
        res.status(201).json({ message: 'Book Created', book});
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Update Book Details
export const updateBook = async (req, res) => {
    try {
        const isUpdated = await bookCategoryservice.updateBook(req.params.id, req.body);
        if (!isUpdated) {
            res.status(204).json({ message: 'Book Not Found' })
        } else {
            res.status(200).json({ message: 'Book Updated Successfully' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Delete Book
export const deleteBook = async (req, res) => {
    try {
        const isDeleted = await bookCategoryservice.deleteBook(req.params.id);
        if (!isDeleted) {
            res.status(204).json({ message: 'Book Not Found' })
        } else {
            res.status(200).json({ message: 'Book Deleted Successfully' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}*/
