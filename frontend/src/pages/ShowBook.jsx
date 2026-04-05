import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import bookImg from "../assets/images/bookDefault.jpg";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading books:", error);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="my-5 text-center"> Book Details</h1>
      <div className="card p-3" style={{ width: "18rem" }}>
        <img src={bookImg} className="card-img-top" alt="Book" />
        <div className="card-body">
          <p className="card-text">
            <span>Title : {book.title}</span>
          </p>
          <p className="card-text">
            <span> Author : {book.author}</span>
          </p>
          <p className="card-text">
            <span> Description : </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
