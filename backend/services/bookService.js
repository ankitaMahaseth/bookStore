import bookModel from "../models/bookModel.js";

// Get All Books
// book.service.js
export const getAllBook = async (query) => {
  console.log("===============================");
  // const search = req.query.search;
  console.log(query);
  if (Object.keys(query).length === 0) return bookModel.find();
  else
    return bookModel.find({
      title: { $regex: query["search"], $options: "i" },
    });

  //     let { page = 1, limit = 5, sort = '_id', order = 'asc', category,author } = query;

  //     page = Number(page);
  //     limit = Number(limit);

  //     const skip = (page - 1) * limit;

  //     let filter = {};
  //     if (category) filter.category = category;
  //     if (author)  filter.author = author;

  //     const totalRecords = await bookModel.countDocuments(filter);

  //     const books = await bookModel.find(filter)
  //         .sort({ [sort]: order === "desc" ? -1 : 1 })
  //         .skip(skip)
  //         .limit(limit)
  //         .lean();

  //     return {
  //         totalRecords,
  //         totalPages: Math.ceil(totalRecords / limit),
  //         currentPage: page,
  //         Books: books
  //     };
  // };
};
// Get Book by Id
export const getBookById = async (id) => {
  try {
    return await bookModel.findById(id).lean();
  } catch (err) {
    console.log(err);
  }
};

// Create new Book
export const createBook = async (bookData) => {
  let createdBook = await bookModel.create(bookData);
  return createdBook._id;
};

// Update Book Details
export const updateBook = async (id, bookData) => {
  console.log(id);
  let updatedBook = await bookModel.findByIdAndUpdate(id, bookData);

  return updatedBook;
};

// Delete Book details
export const deleteBook = async (id) => {
  return await bookModel.findByIdAndDelete(id);
};
