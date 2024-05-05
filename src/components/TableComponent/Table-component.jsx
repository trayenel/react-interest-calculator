import styles from "./table-component.module.css";

const TableComponent = (props) => {
  if (props.data.length < 1) return;
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
      <tbody>
        {props.data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.savingsEndOfYear}</td>
              <td>{item.yearlyInterest}</td>
              <td>TOTAL INTEREST GAINED</td>
              <td>TOTAL INVESTED CAPITAL</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
