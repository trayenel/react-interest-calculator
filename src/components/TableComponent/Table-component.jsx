import styles from "./table-component.module.css";

const TableComponent = (props) => {
  if (props.data.length < 1) return;
  let totalSavings = 0;
  let totalContribution = 0;
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
          totalSavings += item.yearlyInterest;
          totalContribution += item.yearlyContribution;
          return (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.savingsEndOfYear.toFixed(2)}</td>
              <td>{item.yearlyInterest.toFixed(2)}</td>
              <td>{totalSavings.toFixed(2)}</td>
              <td>{totalContribution}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
