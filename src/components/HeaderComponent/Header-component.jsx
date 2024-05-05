import styles from "./header-component.module.css";

const HeaderComponent = (props) => {
  return (
    <header className={styles.header}>
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default HeaderComponent;
