import styles from "@/styles/Header.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBell as farBell } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <Image
          className={styles.logo}
          src="/images/lendsqr.svg"
          height={30}
          width={138.44}
          priority={true}
          alt="lendsqr logo"
        />
        <form>
          <div className={styles.form_parent}>
            <input
              type="text"
              name="search"
              placeholder="Search for anything"
            />
            <button type="button">
              <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />
            </button>
          </div>
        </form>
      </div>
      <div className={styles.docs_container}>
        <p className={styles.docs}>Docs</p>
        <FontAwesomeIcon icon={farBell} className={styles.bell_icon} />
        <Image
          src="/images/image-4.svg"
          className={styles.profile_image}
          height={30}
          width={30}
          alt="Profile Image"
        />
        <p className={styles.profile_name}>Adedeji</p>
        <FontAwesomeIcon icon={faCaretDown} className={styles.downward_icon} />
      </div>
    </header>
  );
}
