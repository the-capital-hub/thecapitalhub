// import React from 'react'
// import './OneLinkMarketSection.scss'

// const OneLinkMarketSection = () => {
//   return (
//   <>

//   s
//   </>
//   )
// }

// export default OneLinkMarketSection

import React from "react";
import "./OneLinkMarketSection.scss";

const OneLinkMarketSection = () => {
  const cardData = [
    {
      title: "title",
      content: "TAM (Total Addressable Market)",
    },
    {
      title: "2.Solution",
      content: "SAM (Service Addressable Market)",
    },
    {
      title: "3.Competitive Landscape",
      content: "SAM (Service Addressable Market)",
    },
    // { title: "7.Business Model", content: "Your Business Model" },
  ];

  return (
    <>
      <div className="row onelink_market_container">
        {cardData.map((card, index) => (
          <div className="col-md-4 before_card" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
                <input placeholder="Enter amount" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OneLinkMarketSection;
