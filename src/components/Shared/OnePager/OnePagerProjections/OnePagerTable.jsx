import React from "react";
import "./OnePagerTable.scss";

export default function OnePagerTable({ heading }) {
  return (
    <div className="onePager_table_wrapper">
      <div className="table_container overflow-x-auto pb-2">
        <table className="border rounded-2 shadow-sm">
          <tbody>
            <tr>
              <td className="text-center fw-semibold">{heading}</td>
              <td>
                <div
                  className="w-50 border-end d-flex align-items-center"
                  style={{ minHeight: "50%" }}
                >
                  <p
                    className="m-0 text-muted ps-3"
                    style={{ fontSize: "12px" }}
                  >
                    Amount
                  </p>
                </div>
                {/* Amount here */}
              </td>

              <td>
                <div
                  className="w-50 border-end d-flex align-items-center"
                  style={{ minHeight: "50%" }}
                >
                  <p
                    className="m-0 text-muted ps-3"
                    style={{ fontSize: "12px" }}
                  >
                    Amount
                  </p>
                </div>
                {/* Amount here */}
              </td>

              <td>
                <div
                  className="w-50 border-end d-flex align-items-center"
                  style={{ minHeight: "50%" }}
                >
                  <p
                    className="m-0 text-muted ps-3"
                    style={{ fontSize: "12px" }}
                  >
                    Amount
                  </p>
                </div>
                {/* Amount here */}
              </td>

              <td>
                <div
                  className="w-50 border-end d-flex align-items-center"
                  style={{ minHeight: "50%" }}
                >
                  <p
                    className="m-0 text-muted ps-3"
                    style={{ fontSize: "12px" }}
                  >
                    Amount
                  </p>
                </div>
                {/* Amount here */}
              </td>

              <td>
                <div
                  className="w-50 border-end d-flex align-items-center"
                  style={{ minHeight: "50%" }}
                >
                  <p
                    className="m-0 text-muted ps-3"
                    style={{ fontSize: "12px" }}
                  >
                    Amount
                  </p>
                </div>
                {/* Amount here */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
