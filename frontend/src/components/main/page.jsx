import axios from "axios";
import { useEffect, useState } from "react";
import "./page.css";
import bookImg from "./bookDefault.jpg";

export function BookIndex() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error loading books:", error);
      });
  }, []);

  async function handleSearch() {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/books?search=${query}`,
      );
      setSearchResults(res.data || []);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-shade">
      <BookHeader />
      <BookSection />
      <SearchResult query={query} />
      <BookList books={books} />
    </div>
  );

  function BookHeader() {
    return (
      <header className="d-flex justify-content-between align-items-center p-4">
        <div>
          <span className="brand-title">
            <span className="bi bi-book-fill">Book Store</span>
          </span>
        </div>

        <div className="d-flex">
          <button className="btn btn-danger ms-2">Register / Login</button>
        </div>
      </header>
    );
  }

  function BookSection() {
    return (
      <section className="text-white text-center mt-5">
        <div className="section-title">
          Unlimited books and many
          <br /> more{" "}
        </div>

        <div className="section-subtitle">"Open a book, open your mind"</div>

        <BookMain />
      </section>
    );
  }

  function BookMain() {
    return (
      <main className="mt-4">
        <p>
          "Today a reader, tomorrow a leader," and "Get lost in a book, found in
          stories"
        </p>

        <div className="d-flex justify-content-center m-5">
          <div>
            <div className="input-group input-group-lg">
              <input
                type="text"
                placeholder="Your favourite Book"
                className="form-control"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <button className="btn btn-danger" onClick={handleSearch}>
                Search Now <span className="bi bi-chevron-right"></span>{" "}
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  function SearchResult({ query }) {
    return (
      <div>
        {query &&
          searchResults.map((book, index) => (
            <div className="row">
              <h1 className="mt-4 mb-4">Your favourite Book</h1>
              <div className="col-md-6 p-3">
                <div key={book._id || index}>
                  <h4>Name : {book.title}</h4>
                  <p>Author : {book.author}</p>
                  <p>Price : {book.price}</p>
                  <p>Category : {book.category}</p>
                </div>
              </div>
              <div className="col-md-6 card p-3">
                <img className="card-img-top" src={bookImg} alt="Card image" />
              </div>
            </div>
          ))}
      </div>
    );
  }

  function BookList({ books }) {
    return (
      <div className="bookList">
        <div className="row">
          <div className="col-8">
            <h3 className="text-danger bg-info p-4">Best Selling Books</h3>
            <div className="row">
              {books.map((book) => (
                <div className="col-4">
                  <div className="card p-3" key={book.id}>
                    <img
                      className="card-img-top"
                      src={bookImg}
                      alt="Card image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text">{book.author}</p>
                      <a
                        href="#"
                        className="btn btn-primary mt-3"
                        onClick={handleSearch}
                      >
                        Check Here
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="AllBookList">
            <h3 className="text-danger bg-warning p-5">All Book List</h3>
            <ul className="list-group">
              {books.map((book) => (
                <li className="list-group-item" key={book.id}>
                  {book.title}{" "}
                  <span className="badge bg-success text-white">
                    {book.stock} left
                    {/* <span className="bi bi-star-fill"></span>{" "} */}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
