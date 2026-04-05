import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setStock(response.data.stock);
        setCategory(response.data.category);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [id]);

  const handleEditBook = (e) => {
    e.preventDefault(); // ✅ prevents page reload
    const data = { title, author, stock, category };
    setLoading(true);

    axios
      .put(`http://localhost:4000/api/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happened");
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h1 className="my-5 text-center">Edit Existing Book</h1>
      <div className="flex border border-2 mx-auto p-5">
        <form onSubmit={handleEditBook}>
          {/* Book Title */}

          <div className="my-4">
            <label className="mb-4">Title :</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="formControl border border-2 p-2 w-full"
            />
          </div>

          {/* Book author */}

          <div className="my-4">
            <label className="mb-4">Author :</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="formControl border border-2 p-2 w-full"
            />
          </div>

          {/* Book Stock */}

          <div className="my-4">
            <label className="mb-4">Stock :</label>
            <input
              type="text"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="formControl border border-2 p-2 w-full"
            />
          </div>

          {/* Book Category */}

          <div className="my-4">
            <label className="mb-4">Category :</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="formControl border border-2 p-2 w-full"
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              type="submit"
              className="p-2 btn-success text-white btn btn-lg m-8"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
