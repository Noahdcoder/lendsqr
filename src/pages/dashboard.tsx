import React from "react"; // Add this import statement
import Head from "next/head";
import styles from "@/styles/Dashboard.module.scss";
import CardSection from "@/components/CardSection";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import SideBar from "@/components/SideBar";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [isDivVisible, setDivVisible] = useState(false);
  const [isSideBar, setSideBar] = useState(false);

  const handleSortImageClick = () => {
    setDivVisible(!isDivVisible);
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

  const toggleSidebar = () => {
    setSideBar(!isSideBar);
  };
  return (
    <>
      <Head>
        <title>Lendsqr - Welcome to your dashboard</title>
        <meta name="description" content="User's dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toggleSidebar={toggleSidebar} isSideBar={isSideBar} />
      <div className={styles.body}>
        <SideBar isSideBar={isSideBar} />
        <main className={styles.main}>
          <h1>Users</h1>
          <div className={styles.parent_grid}>
            <CardSection />
            {/* Table */}
            <Table
              handleSortImageClick={handleSortImageClick}
              currentItems={currentItems}
              itemsPerPage={itemsPerPage}
              isDivVisible={isDivVisible}
            />
          </div>
          {/* Pagination */}
          <Pagination
            currentItems={currentItems}
            data={data}
            currentPage={currentPage}
            pageNumbers={pageNumbers}
            prevPage={prevPage}
            nextPage={nextPage}
            goToPage={goToPage}
          />
        </main>
      </div>
    </>
  );
}
