import React from "react";
import "./OnePagePreviewCard.scss";

const OnePagePreviewCard = ({ company }) => {
  const cardData = [
    {
      title: "1.Problem",
      content:
        company?.problem ||
        `Enter the problem statement your startup is addressing`,
    },
    {
      title: "2.Solution",
      content:
        company?.solution || "Enter the solution your startup is offering",
    },
    {
      title: "3.Competitive Landscape",
      content: company?.competitiveLandscape || "Mention your competitors",
    },
    {
      title: "4.Revenue Model",
      content: company?.growthModel || "Your startup’s revenue model",
    },
    {
      title: "5.Growth Strategy",
      content: company?.growthStrategy || "Your Growth startegy",
    },
    {
      title: "6.Market Traction",
      content: company?.marketTraction || "Your Market traction",
    },
    // { title: "7.Business Model", content: "Your Business Model" },
  ];

  return (
    <>
      <div className="row onepage_card_container">
        {cardData.map((card, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <textarea
                  cols={30}
                  rows={4}
                  placeholder={card.content}
                  className="card-text"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OnePagePreviewCard;
