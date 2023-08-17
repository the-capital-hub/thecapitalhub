import React from "react";
import "./table.scss";

const Table = ({ hidden }) => {
  return (
    <>
      <div className="table-container">
        <h2 className={hidden && "hidden"}>Projections</h2>

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
