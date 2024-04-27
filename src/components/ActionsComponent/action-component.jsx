import styles from "./action-component.module.css";

const ActionComponent = (props) => {
  return <p className={styles.actions}>{props.children}</p>;
};

export default ActionComponent;
