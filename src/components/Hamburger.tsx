import styles from "@/styles/Hamburger.module.scss";

type Props = {
  toggleSidebar: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => void;
  isSideBar: boolean;
};

export default function Hamburger({ isSideBar, toggleSidebar }: Props) {
  return (
    <div className={styles.hamburgerMenu} onClick={toggleSidebar}>
      <div
        className={`${styles.line} ${styles.line1} ${
          isSideBar ? styles.open : ""
        }`}
      />
      <div
        className={`${styles.line} ${styles.line2} ${
          isSideBar ? styles.open : ""
        }`}
      />
      <div
        className={`${styles.line} ${styles.line3} ${
          isSideBar ? styles.open : ""
        }`}
      />
    </div>
  );
}
