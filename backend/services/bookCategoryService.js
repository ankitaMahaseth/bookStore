import bookModel from "../models/bookModel.js";

// Get All Categories
export const getAllCategories = async () => {
    return await bookModel.find().lean();
}

// Get category by Id
export const categoryById = async (id) => {
    try{
        // return await bookModel.findById(id).lean();
    }catch(err){
        console.log(err)
    }
}

// Create new Book
/*export const createBook = async (bookData) => {
    let createdBook = await bookModel.create(bookData);
    return createdBook._id;
}

// Update Book Details
export const updateBook = async (id, bookData) => { // PATCH
    return await bookModel.findByIdAndUpdate(id, bookData)
}
const replaceBook = async (id, bookData) => { // PUT



// Delete Book details
export const deleteBook = async (id) => {
    return await bookModel.findByIdAndDelete(id)
}*/
