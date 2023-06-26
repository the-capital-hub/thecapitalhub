import React from "react";

const NewsCorner = () => {
  return (
    <>
      <div className="col-12 recommendation_card">
        <div className="card mt-2 right_view_profile_card right_view_profile">
          <div className="card-header">
            <div className="loop_title">
              <span>News Corner</span>
            </div>
          </div>
          <div className="card-body recommendation_card_body ">
            <div className="recommendation_card_text">
              <h4 className="smallest_typo">
                Cellbell startup has raised to $10 million dollor funding
              </h4>
              <button>
                <span>Show more</span>
              </button>
            </div>
          </div>
          <hr className="hr" />
          <div className="card-body recommendation_card_body ">
            <div className="recommendation_card_text">
              <h4 className="smallest_typo">
                Cellbell startup has raised to $10 million dollor funding
              </h4>
              <button>
                <span>Show more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCorner;
