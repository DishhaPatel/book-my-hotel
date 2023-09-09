import "./Pagination.css";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <ul className="pagination">
      <li className={currentPage === 1 ? "disabled" : ""}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
      {pageNumbers.map((page) => (
        <li key={page}>
          <button
            className={currentPage === page ? "page-active" : ""}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        </li>
      ))}
      <li className={currentPage === totalPages ? "disabled" : ""}>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
