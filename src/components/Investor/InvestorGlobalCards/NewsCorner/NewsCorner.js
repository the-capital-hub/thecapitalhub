import React from "react";
import "./newscorner.scss";
import { Link } from "react-router-dom";

const NewsCorner = ({ title, btnlink }) => {
  const newsItems = [
    {
      title:
        "Why Mentoring Matters: Why Angel Investors Should Prioritize Mentorship Before Investing in a Startup",
      btnlink: "/blog/startupOne",
      id: 1,
    },
    {
      title: "8 Tips to start raising Angel investments for startups",
      btnlink: "/blog/startupTwo",
      id: 2,
    },
    {
      title: "HOW TO BUILD A GREAT STARTUP by Pramod Badiger",
      btnlink: "/blog/startupThree",
      id: 3,
    },
  ];
  return (
    <>
      <div className="newscorner_container">
        <div className="col-12 newscorner_card">
          <div className="card mt-2 right_view_profile_card right_view_profile">
            <div className="card-header">
              <div className="title">
                <span>News Corner</span>
              </div>
            </div>
            {newsItems.map((item, index) => (
              <div className="card-body newscorner_card_body " key={item.id}>
                <div className="newscorner_card_text">
                  <h4 className="smallest_typo">
                    {item.title
                      ? item.title
                      : " Cellbell startup has raised to $10 million dollor funding"}
                  </h4>
                  <Link
                    to={item.btnlink ? item.btnlink : ""}
                    style={{ textDecoration: "none" }}
                  >
                    <button>
                      <span>Show more</span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            <hr className="hr" />
            {/* <div className="card-body newscorner_card_body ">
              <div className="newscorner_card_text">
                <h4 className="smallest_typo">
                  {title
                    ? title
                    : " Cellbell startup has raised to $10 million dollor funding"}
                </h4>
                <Link to={btnlink ? btnlink : ""} style={{textDecoration:"none"}}>
                  <button>
                    <span>Show more</span>
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCorner;
