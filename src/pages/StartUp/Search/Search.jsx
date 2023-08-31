import "./Search.scss";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import connectIcon from "../../../Images/connect-button.svg";

function Search() {
  return (
    <div className="container-fluid serach_main_container">
      <SmallProfileCard text={"Search"} />
      <section className="content_section mt-4">
        <div className="row">
          <div className="col-12 mt-2 box p-4">
            <h4>People</h4>
            <hr />
            <div className="people_container d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-between align-items-center">
              <div className="short_desc d-flex">
                <img
                  src="https://res.cloudinary.com/drjt9guif/image/upload/c_scale,q_100,w_265/v1692955323/TheCapitalHub/users/profilePictures/wprwfl9rsdkyfptag0hw.webp"
                  className="people_img rounded-circle"
                  alt="people image"
                />
                <div className="d-flex flex-column justify-content-center">
                  <h5>Pramod Badiger</h5>
                  <p>Founder & CEO</p>
                </div>
              </div>
              <button className="d-flex justify-content-center align-items-center gap-2 py-2 px-3 rounded-5 border-secondary bg-white">
                <img src={connectIcon} alt="connect-user" />
                <span>Connect</span>
              </button>
            </div>
            <div className="people_container d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-between align-items-center">
              <div className="short_desc d-flex">
                <img
                  src="https://res.cloudinary.com/drjt9guif/image/upload/c_scale,q_100,w_265/v1692955323/TheCapitalHub/users/profilePictures/wprwfl9rsdkyfptag0hw.webp"
                  className="people_img rounded-circle"
                  alt="people image"
                />
                <div className="d-flex flex-column justify-content-center">
                  <h5>Pramod Badiger</h5>
                  <p>Founder & CEO</p>
                </div>
              </div>
              <button className="d-flex justify-content-center align-items-center gap-2 py-2 px-3 rounded-5 border-secondary bg-white">
                <img src={connectIcon} alt="connect-user" />
                <span>Connect</span>
              </button>
            </div>
            <div className="people_container d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-between align-items-center">
              <div className="short_desc d-flex">
                <img
                  src="https://res.cloudinary.com/drjt9guif/image/upload/c_scale,q_100,w_265/v1692955323/TheCapitalHub/users/profilePictures/wprwfl9rsdkyfptag0hw.webp"
                  className="people_img rounded-circle"
                  alt="people image"
                />
                <div className="d-flex flex-column justify-content-center">
                  <h5>Pramod Badiger</h5>
                  <p>Founder & CEO</p>
                </div>
              </div>
              <button className="d-flex justify-content-center align-items-center gap-2 py-2 px-3 rounded-5 border-secondary bg-white">
                <img src={connectIcon} alt="connect-user" />
                <span>Connect</span>
              </button>
            </div>
            <div className="people_container d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-between align-items-center">
              <div className="short_desc d-flex">
                <img
                  src="https://res.cloudinary.com/drjt9guif/image/upload/c_scale,q_100,w_265/v1692955323/TheCapitalHub/users/profilePictures/wprwfl9rsdkyfptag0hw.webp"
                  className="people_img rounded-circle"
                  alt="people image"
                />
                <div className="d-flex flex-column justify-content-center">
                  <h5>Pramod Badiger</h5>
                  <p>Founder & CEO</p>
                </div>
              </div>
              <button className="d-flex justify-content-center align-items-center gap-2 py-2 px-3 rounded-5 border-secondary bg-white">
                <img src={connectIcon} alt="connect-user" />
                <span>Connect</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
