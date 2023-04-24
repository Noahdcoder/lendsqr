import React from "react";
import styles from "@/styles/Dashboard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  currentItems: any[];
  data: any[];
  currentPage: number;
  pageNumbers: number[];
  prevPage: () => void;
  nextPage: () => void;
  goToPage: (pageNumber: number) => void;
}

export default function Pagination({
  currentItems,
  data,
  currentPage,
  pageNumbers,
  prevPage,
  nextPage,
  goToPage,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <div className={styles.showing}>
        Showing{" "}
        <span>
          {currentItems.length} <FontAwesomeIcon icon={faChevronDown} />
        </span>{" "}
        out of {data.length}
      </div>
      <div className={styles.numbering}>
        <button
          className={styles.paginationBtn}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {currentPage > 3 && <span className={styles.paginationDots}>...</span>}
        {pageNumbers.map((pageNumber) => {
          if (
            (pageNumber === 1 && currentPage === 1) ||
            pageNumber === currentPage ||
            pageNumber === pageNumbers.length ||
            (pageNumber > currentPage - 2 && pageNumber < currentPage + 2)
          ) {
            return (
              <button
                key={`page_${pageNumber}`} // Update key prop to make it unique
                className={`${styles.paginationNumber} ${
                  pageNumber === currentPage ? styles.active : ""
                }`}
                onClick={() => goToPage(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          } else {
            return null;
          }
        })}
        {currentPage < pageNumbers.length - 2 && (
          <span className={styles.paginationDots}>...</span>
        )}
        <button
          className={styles.paginationBtn}
          onClick={nextPage}
          disabled={currentPage === pageNumbers.length}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
