import React from "react"; // Add this import statement
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Dashboard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import CardSingle from "@/components/CardSingle";
import { header } from "../../data/dashboardData";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import SideBar from "@/components/SideBar";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [showFilter, setShowFilter] = useState(false); // State variable to keep track of filter visibility
  const [orgNameFilter, setOrgNameFilter] = useState(""); // State variable for orgName filter
  const [userNameFilter, setUserNameFilter] = useState(""); // State variable for userName filter

  const handleSortClick = () => {
    setShowFilter(!showFilter); // Toggle filter visibility
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Calculate total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);
    // Generate an array of page numbers [1, 2, 3, ..., totalPages]
    setPageNumbers(Array.from({ length: totalPages }, (_, i) => i + 1));
  }, [data, itemsPerPage]);

  const fetchData = () => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    // Explicitly specify the type
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Head>
        <title>Lendsqr - Welcome to your dashboard</title>
        <meta name="description" content="User's dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.body}>
        <SideBar />
        <main className={styles.main}>
          <h1>Users</h1>
          <div className={styles.parent_grid}>
            <CardSingle />
            <table className={styles.table}>
              <thead>
                <tr>
                  {header.map((heading, index) => {
                    const { id, text } = heading;
                    return (
                      <th key={id}>
                        {text}{" "}
                        <Image
                          src="/images/sort.png"
                          height={10.67}
                          width={16}
                          alt="filter"
                          className={styles.filter}
                          onClick={handleSortClick}
                        />
                        {showFilter && (index === 0 || index === 1) && (
                          // Render input elements for filtering if showFilter is true and column is 0 or 1
                          <input
                            type="text"
                            value={index === 0 ? orgNameFilter : userNameFilter}
                            onChange={(e) =>
                              index === 0
                                ? setOrgNameFilter(e.target.value)
                                : setUserNameFilter(e.target.value)
                            }
                            placeholder={
                              index === 0
                                ? "Filter by Org Name"
                                : "Filter by User Name"
                            }
                          />
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => {
                  const { orgName, userName, email, phoneNumber, createdAt } =
                    item;
                  return (
                    <React.Fragment key={userName}>
                      <tr>
                        <td>{orgName}</td>
                        <td>{userName}</td>
                        <td>{email}</td>
                        <td>{phoneNumber}</td>
                        <td>{createdAt}</td>
                        <td>
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </td>
                      </tr>
                      {index !== currentItems.length - 1 && (
                        <tr>
                          <td colSpan={6}>
                            <hr style={{ borderTop: "1px solid #ddd" }} />
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
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
              {currentPage > 3 && (
                <span className={styles.paginationDots}>...</span>
              )}
              {pageNumbers.map((pageNumber) => {
                if (
                  (pageNumber === 1 && currentPage === 1) ||
                  pageNumber === currentPage ||
                  pageNumber === pageNumbers.length ||
                  (pageNumber > currentPage - 2 && pageNumber < currentPage + 2)
                ) {
                  return (
                    <button
                      key={pageNumber}
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
        </main>
      </div>
    </>
  );
}
