const TableContentsComponent = (props) => {
  if (props.data.length === 0) {
    return;
  }
  props.data.map((item) => {
    return (
      <tbody>
        <tr>
          <td>{item.year}</td>
          <td>{item.savingsEndOfYear}</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
    );
  });
};

export default TableContentsComponent;
