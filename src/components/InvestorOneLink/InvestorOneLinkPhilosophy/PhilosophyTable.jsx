import React from "react";

export default function PhilosophyTable({ amounts }) {
  return (
    <div className="revenue_table">
      <div className="table_container overflow-x-auto pb-2">
        <fieldset className="border p-0 position-relative shadow-sm rounded-3 ">
          <legend className=" m-0 px-3 ms-3 rounded-pill bg-white ">
            Revenue
          </legend>
          <table className="">
            <tbody>
              <tr>
                <td className="text-center">Revenue</td>
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
        </fieldset>
      </div>
    </div>
  );
}
