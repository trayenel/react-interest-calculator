import styles from "./table-head-component.module.css";

const TableHeadComponent = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {props.children}
    </table>
  );
};

export default TableHeadComponent;
