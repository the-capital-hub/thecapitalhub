import React, { useState } from "react";
import "./OnePagePreviewCard.scss";
import { useSelector } from "react-redux";
import { postStartUpData } from "../../../../../Service/user";

const OnePagePreviewCard = ({ company, page }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [editedContent, setEditedContent] = useState({}); 

  const cardData = [
    {
      field: "problem",
      title: "1.Problem",
      content:
        company?.problem ||
        `Enter the problem statement your startup is addressing`,
    },
    {
      field: "solution",
      title: "2.Solution",
      content:
        company?.solution || "Enter the solution your startup is offering",
    },
    {
      field: "competitiveLandscape",
      title: "3.Competitive Landscape",
      content: company?.competitiveLandscape || "Mention your competitors",
    },
    {
      field: "growthModel",
      title: "4.Revenue Model",
      content: company?.growthModel || "Your startup’s revenue model",
    },
    {
      field: "growthStrategy",
      title: "5.Growth Strategy",
      content: company?.growthStrategy || "Your Growth startegy",
    },
    {
      field: "marketTraction",
      title: "6.Market Traction",
      content: company?.marketTraction || "Your Market traction",
    },
    // { title: "7.Business Model", content: "Your Business Model" },
  ];

  const handleUpdate = (field, newValue) => {
    if (!newValue) return;
    setEditedContent({ ...editedContent, [field]: newValue });

    postStartUpData({
      [field]: newValue,
      founderId: loggedInUser._id,
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row onepage_card_container">
        {cardData.map((card, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                {page === "oneLinkEdit" ? (
                  <input
                    type="text"
                    className="card-text"
                    value={editedContent[card.field] || card.content}
                    onChange={(e) => handleUpdate(card.field, e.target.value)}
                    onBlur={() => handleUpdate(card.field, editedContent[card.field])}
                  />
                ) : (
                  <h6>{card.content}</h6>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OnePagePreviewCard;
