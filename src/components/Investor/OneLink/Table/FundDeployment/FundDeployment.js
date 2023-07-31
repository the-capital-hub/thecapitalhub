import React from "react";
import './FundDeployment.scss';

const Table = () => {
  return (
    <>
      <div className="fund_deployment_container">
        <h2>Projections</h2>
        <table>
          <tr>
            <th>Requirement</th>
            <th>Amount</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <td>1000</td>
            <td>1000</td>
            <td>1000</td>
          </tr>
          <tr>
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
