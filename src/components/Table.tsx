import React from "react";
import styles from "@/styles/Dashboard.module.scss";
import { header } from "../../data/dashboardData";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

type Props = {
  handleSortImageClick: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => void;
  currentItems: any[];
  itemsPerPage: number;
  isDivVisible: boolean;
};

export default function Table({
  handleSortImageClick,
  currentItems,
  itemsPerPage,
  isDivVisible,
}: Props) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {header.map((heading) => {
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
                  onClick={handleSortImageClick}
                />
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item, index) => {
          const { orgName, userName, email, phoneNumber, createdAt } = item;
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
              {index !== itemsPerPage - 1 && (
                <tr>
                  <td colSpan={6}>
                    <hr style={{ borderTop: "1px solid #ddd" }} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          );
        })}
        {isDivVisible && (
          <div className={styles.overlay}>
            <form className={styles.filterForm}>
              <div className={styles.formGroup}>
                <label htmlFor="dropdownInput">Organization</label>
                <select className="form-control" id="dropdownInput">
                  <option value="">Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="textInput">Text Input</label>
                <input
                  type="text"
                  className="form-control"
                  id="textInput"
                  placeholder="Enter text"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="emailInput">Email Input</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="Enter email"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="dateInput">Date Input</label>
                <input type="date" className="form-control" id="dateInput" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phoneInput">Phone Number Input</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneInput"
                  placeholder="Enter phone number"
                />
              </div>
              <div className={styles.submit}>
                <button type="submit" className={styles.reset}>
                  Reset
                </button>
                <button type="submit" className={styles.filter}>
                  Filter
                </button>
              </div>
            </form>
          </div>
        )}
      </tbody>
    </table>
  );
}
