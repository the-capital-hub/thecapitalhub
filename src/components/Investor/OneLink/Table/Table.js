import React from "react";
import "./table.scss";

const Table = () => {
  return (
    <>
      <div className="table-container">
      <h2>Projections</h2>

        <table>
          <tr>
            <th>Revenue:</th>
            <td>1000</td>
            <td>1000</td>
            <td>1000</td>
            <td>1000</td>
            <td>1000</td>
          </tr>
          <tr>
            <th>Expense:</th>
            <td>1000</td>
            <td>1000</td>
            <td>1000</td>
            <td>1000</td>
            <td>1000</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Table;
