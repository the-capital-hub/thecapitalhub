import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import CompanyCardContainer from "../../../components/NewInvestor/SyndicateComponents/CompanyCardContainer";
import "./Syndicates.scss";

export default function Syndicates() {
  return (
    <div className="syndicates__container">
      <SmallProfileCard text="Syndicates" />
      <section className="section__wrapper bg-white rounded-3 m-3 border">
        <div className="companies__container border-bottom ">
          <div className="companies__header py-3 px-4 d-flex justify-content-between align-items-center border-bottom">
            <h2 className="main__heading div__heading">Companies</h2>
            <div className="main__btn">
              {/* <Button text="Create a Group" /> */}
              <button className="btn-capital">Create a Group</button>
            </div>
          </div>
          <div className="container__padding py-5 px-4">
            <CompanyCardContainer key={"companies"} isCompanies />
          </div>
        </div>

        <div className="membership__container mt-4 py-1 px-4 d-flex justify-content-between align-items-center border-bottom">
          <h2 className="main__heading div__heading mb-2">Membership</h2>
        </div>
        <div className="container__padding py-5  px-4">
          <CompanyCardContainer key={"members"} text={"Membership"} />
        </div>
      </section>
    </div>
  );
}
