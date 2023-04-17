// iconRenderer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faUsers,
  faSackDollar,
  faHandshake,
  faPiggyBank,
  faHandHoldingDollar,
  faUserCheck,
  faUserXmark,
  faBriefcase,
  faBuildingColumns,
  faDollarSign,
  faExchangeAlt,
  faCog,
  faUserTag,
  faChartBar,
  faMoneyBill,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

export const renderIcon = (text) => {
  switch (text) {
    case "Users":
      return <FontAwesomeIcon icon={faUserGroup} />;
    case "Guarantors":
      return <FontAwesomeIcon icon={faUsers} />;
    case "Loans":
      return <FontAwesomeIcon icon={faSackDollar} />;
    case "Decision Models":
      return <FontAwesomeIcon icon={faHandshake} />;
    case "Savings":
      return <FontAwesomeIcon icon={faPiggyBank} />;
    case "Loan Requests":
      return <FontAwesomeIcon icon={faHandHoldingDollar} />;
    case "Whitelist":
      return <FontAwesomeIcon icon={faUserCheck} />;
    case "Karma":
      return <FontAwesomeIcon icon={faUserXmark} />;
    case "Organization":
      return <FontAwesomeIcon icon={faBriefcase} />;
    case "Loan Products":
      return <FontAwesomeIcon icon={faHandHoldingDollar} />;
    case "Savings Products":
      return <FontAwesomeIcon icon={faBuildingColumns} />;
    case "Fees and Charges":
      return <FontAwesomeIcon icon={faDollarSign} />;
    case "Transactions":
      return <FontAwesomeIcon icon={faExchangeAlt} />;
    case "Services":
      return <FontAwesomeIcon icon={faCog} />;
    case "Service Accounts":
      return <FontAwesomeIcon icon={faUserTag} />;
    case "Settlements":
      return <FontAwesomeIcon icon={faHandshake} />;
    case "Reports":
      return <FontAwesomeIcon icon={faChartBar} />;
    case "Preferences":
      return <FontAwesomeIcon icon={faCog} />;
    case "Fees and Pricing":
      return <FontAwesomeIcon icon={faMoneyBill} />;
    case "Audit Logs":
      return <FontAwesomeIcon icon={faClipboardList} />;
    default:
      return null;
  }
};
