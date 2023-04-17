import styles from "@/styles/SideBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { customers, businesses, settings } from "../../data/data";
import { renderIcon } from "../../utils/iconRenderer";

export default function SideBar() {
  return (
    <aside className={styles.aside}>
      <h4>
        Switch Org
        <FontAwesomeIcon className={styles.switch_span} icon={faChevronDown} />
      </h4>
      <h5>
        <span>
          <FontAwesomeIcon icon={faBriefcase} />
        </span>
        Dashboard
      </h5>
      <div>
        <h6>CUSTOMERS</h6>
        {customers.map((item) => {
          const { id, text } = item;
          return (
            <p key={id}>
              <span>{renderIcon(item.text)}</span>
              {text}
            </p>
          );
        })}
      </div>
      <div>
        <h6>BUSINESSES</h6>
        {businesses.map((item) => {
          const { id, text } = item;
          return (
            <p key={id}>
              <span>{renderIcon(item.text)}</span>
              {text}
            </p>
          );
        })}
      </div>
      <div>
        <h6>SETTINGS</h6>
        {settings.map((item) => {
          const { id, text } = item;
          return (
            <p key={id}>
              <span>{renderIcon(item.text)}</span>
              {text}
            </p>
          );
        })}
      </div>
    </aside>
  );
}
