import styles from "./button-component.module.css";

const ButtonComponent = (props) => {
  if (props.type === "submit") {
    return (
      <button
        type={props.type}
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          props.setYearlyState(props.dataHandler(props.userData));
          console.log(props.yearly);
        }}
      >
        {props.type[0].toUpperCase() + props.type.slice(1)}
      </button>
    );
  } else if (props.type === "reset") {
    return (
      <button
        type={props.type}
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          props.yearlyDataReset();
        }}
      >
        {props.type[0].toUpperCase() + props.type.slice(1)}
      </button>
    );
  }
};

export default ButtonComponent;
