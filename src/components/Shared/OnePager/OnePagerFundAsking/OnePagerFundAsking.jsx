import React from "react";

export default function OnePagerFundAsking() {
  return (
    <div className="onePager_fund__Asking">
      <h4 className="main_color">Fund Asking</h4>
      <div className="two_col_grid row-gap-4 column-gap-5">
        {/* fund asking 1 */}
        <fieldset>
          <legend className="main_color">Required For</legend>
          <input
            type="text"
            readOnly
            value={""}
            className="onePager_input shadow-sm main_border"
          />
        </fieldset>
        <fieldset>
          <legend className="main_color">Amount</legend>
          <input
            type="text"
            readOnly
            value={""}
            className="onePager_input shadow-sm main_border"
          />
        </fieldset>

        {/* fund asking 2 */}
        <fieldset>
          <legend className="main_color">Required For</legend>
          <input
            type="text"
            readOnly
            value={""}
            className="onePager_input shadow-sm main_border"
          />
        </fieldset>
        <fieldset>
          <legend className="main_color">Amount</legend>
          <input
            type="text"
            readOnly
            value={""}
            className="onePager_input shadow-sm main_border"
          />
        </fieldset>

        {/* fund asking 3 */}
        <fieldset>
          <legend className="main_color">Required For</legend>
          <input
            type="text"
            readOnly
            value={""}
            className="onePager_input shadow-sm main_border"
          />
        </fieldset>
        <fieldset>
          <legend className="main_color">Amount</legend>
          <input
            type="text"
            readOnly
            value={""}
            className="onePager_input shadow-sm main_border"
          />
        </fieldset>
      </div>
    </div>
  );
}
