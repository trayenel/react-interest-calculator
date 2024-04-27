import styles from "./input-group-component.module.css";

const InputGroupComponent = (props) => {
  return <div className={styles['input-group']}>{props.children}</div>;
};

export default InputGroupComponent;
