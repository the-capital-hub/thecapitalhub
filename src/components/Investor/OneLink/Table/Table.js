import React from "react";
import "./table.scss";

const YEARS = ["2023", "2024", "2025", "2026", "2027"];

const Table = ({ hidden, page }) => {
  return (
    <>
      <div className="table-container">
        <h2 className={hidden && "hidden"}>Projections</h2>

        <table>
          <tr>
            <th>Revenue:</th>
            {YEARS.map((year, index) => {
              return (
                <td className="" key={`revenue${year}${index}`}>
                  {page === "oneLinkEditPage" ? (
                    <input className="table_input" placeholder={year} />
                  ) : (
                    ""
                  )}
                </td>
              );
            })}
            {/* <td>
              {page === "oneLinkEditPage" ? (
                <input className="table_input" placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input className="table_input" placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input className="table_input" placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input className="table_input" placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input className="table_input" placeholder="1000" />
              ) : (
                "1000"
              )}
            </td> */}
          </tr>
          <tr>
            <th>Expense:</th>
            {YEARS.map((year, index) => {
              return (
                <td className="" key={`expense${year}${index}`}>
                  {page === "oneLinkEditPage" ? (
                    <input className="table_input" placeholder={year} />
                  ) : (
                    ""
                  )}
                </td>
              );
            })}
            {/* <td>
              {page === "oneLinkEditPage" ? (
                <input className="table_input" placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input className="table_input" placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input className="table_input" placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input className="table_input" placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input className="table_input" placeholder="1000" />
              ) : (
                "1000"
              )}
            </td> */}
          </tr>
        </table>
      </div>
    </>
  );
};

export default Table;
