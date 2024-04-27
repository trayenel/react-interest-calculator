import styles from "./form-component.module.css";

const FormComponent = (props) => {
  return <form className={styles.form}>{props.children}</form>;
};

export default FormComponent;
