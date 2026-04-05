import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = (e) => {
    e.preventDefault(); // ✅ prevents page reload

    setLoading(true);

    axios
      .delete(`http://localhost:4000/api/books/${id}`)
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
      <h1 className="my-5 text-center">Delete Book</h1>
      <div className="flex border border-2 mx-auto p-12 text-center">
        <h3 className="text-2xl text-center">
          Are You Sure want to Delete This Book ?{" "}
        </h3>
      </div>
      <button
        className="p-4 text-white w-full bg-danger"
        onClick={handleDeleteBook}
      >
        Yes, Delete it.
      </button>
    </div>
  );
};

export default DeleteBook;
