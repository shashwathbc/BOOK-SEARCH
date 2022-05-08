import React, { useEffect, useState } from "react";
import "./bookscomp.css";
import data from "../../data";
import Pagination from "../pagination/Pagination";
function BooksComp() {
  const [search, setSearch] = useState("");

  const searchText = (event) => {
    setSearch(event.target.value);
  };

  let dataSearch = data.bookData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });

  // pagination:
  const [showPerPage] = useState(8);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <>
      {/* SEARCH FUNCTION */}
      <div className="header-container">
        <header className="header">
          <div className="header-content">
            <span className="logo">PayGlocal Book Search </span>

            <form className="search">
              <input
                className="search"
                type="text"
                placeholder="Enter Your Book Name"
                value={search}
                onChange={searchText.bind(this)}
              />
              <button className="search" type="submit">
                Search
              </button>
            </form>

            {/* FILTER FUNCTION */}
            <div className="filter-con search">
              <label>Filter By Your Choice: </label>
              <select
                className="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              >
                <option value="study" className="search">
                  EDUCATION BOOKS {data.bookData.genre === "study"}
                </option>
                <option value="novel" className="search">
                  NOVEL BOOKS {data.bookData.genre === "novel"}
                </option>
                <option value="anime" className="search">
                  ANIME BOOKS {data.bookData.genre === "anime"}
                </option>
                <option value="horrer" className="search">
                  HORRER BOOKS {data.bookData.genre === "horrer"}
                </option>
              </select>
            </div>
          </div>
        </header>
      </div>

      {/* BODY BOOKS */}
      <div className="card-container">
        {dataSearch.slice(pagination.start, pagination.end).map((book) => (
          <div className="card" key={book.id}>
            <img className="book-img" src={book.img} />

            <div className="bottom">
              <h4 className="title">Name : {book.title}</h4>
              <p className="amount">Genre : {book.genre}</p>
              <p className="amount">Price : ${book.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={dataSearch.length}
      />
    </>
  );
}

export default BooksComp;
