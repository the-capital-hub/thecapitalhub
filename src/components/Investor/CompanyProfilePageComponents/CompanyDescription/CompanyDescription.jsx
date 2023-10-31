import React from "react";

export default function CompanyDescription({
  companyData,
  companyDescription,
  setCompanyDescription,
  isBioEditable,
  setIsBioEditable,
  submitBioHandler,
  handleDescriptionChange,
}) {
  return (
    <div className="paragraph__component bg-white rounded-3 p-5 d-flex flex-column gap-4 border">
      <div className="d-flex flex-column-reverse flex-sm-row align-items-sm-center justify-content-between gap-3 gap-md-0">
        <h2>Company Description</h2>
        <span className="ms-auto">
          <div className="d-flex gap-2 justify-content-end flex-wrap flex-md-nowrap">
            <button
              type="button"
              className={`align-self-end btn-base investor ${
                isBioEditable ? "btn-sm" : ""
              }`}
              onClick={() => {
                setCompanyDescription(companyData.description);
                setIsBioEditable(!isBioEditable);
              }}
            >
              {isBioEditable ? "Cancel" : "Edit"}
              {/* <CiEdit /> */}
            </button>
            {isBioEditable && (
              <button
                className={`align-self-end btn-base investor ${
                  isBioEditable ? "btn-sm" : ""
                }`}
                onClick={(e) => submitBioHandler(e)}
              >
                Save
                {/* <CiSaveUp2 /> */}
              </button>
            )}
          </div>
        </span>
      </div>
      {/* <p>
              A little about myself. “Dejection is a sign of failure but it
              becomes the cause of success”. I wrote this when I was 16 years old
              and that’s exactly when I idealised the reality of life. In this
              current world, success is defined in many ways, some of which
              include money, fame and power. I believe that success is just the
              beginning of a new problem. Every step of our lives we work hard to
              solve an issue and every time we end up with a new problem.
            </p> */}
      {isBioEditable ? (
        <textarea
          value={companyDescription}
          name="bio"
          onChange={handleDescriptionChange}
          className="editPage_textarea p-2"
          rows={4}
        />
      ) : (
        <p className="small_typo">
          {companyDescription || "Click on edit to add company description"}
        </p>
      )}
      {/* <Link className="see__more align-self-end">See more</Link> */}
    </div>
  );
}
