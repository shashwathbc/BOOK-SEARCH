import React, { useState, useEffect } from "react";
import "./pagination.css";

function Pagination({ showPerPage, onPaginationChange, total }) {
  const [counter, setCounter] = useState(1);
  const [noOfButtons] = useState(Math.ceil(total / showPerPage));

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (noOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="pagination-container">
      <div className="center">
        <div className="pagination">
          <a
            href="!#"
            className="page-link"
            onClick={() => onButtonClick("prev")}
          >
            Previous
          </a>

          {new Array(noOfButtons).fill("").map((el, index) => (
            <a
              href="!#"
              onClick={() => setCounter(index + 1)}
              className={`page-link ${index + 1 === counter ? "active" : null}`}
            >
              {index + 1}
            </a>
          ))}

          <a
            href="!#"
            className="page-link"
            onClick={() => onButtonClick("next")}
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pagination;

