import React from "react";
import "./ServiceStats.scss";

export default function ServiceStats() {
  return (
    <div className="service_stats_wrapper w-100">
      <div className="container stats_container mx-auto py-5">
        <div className="stats_div">
          <h4 className="text-captalize">20+</h4>
          <p className="text-capitalize">fundraising done</p>
        </div>

        <div className="stats_div">
          <h4 className="text-captalize">40+</h4>
          <p className="text-capitalize">Development Clients</p>
        </div>

        <div className="stats_div">
          <h4 className="text-captalize">#1</h4>
          <p className="text-capitalize">Lowest Market Rate</p>
        </div>

        <div className="stats_div">
          <h4 className="text-captalize">10X</h4>
          <p className="text-capitalize">Faster Delivery</p>
        </div>
      </div>
    </div>
  );
}
