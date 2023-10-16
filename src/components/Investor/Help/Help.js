import "./Help.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import HelpIcon from "../../../Images/Help/Help.svg";
import SearchIcon from "../../../Images/Help/searchIcon.svg";
import EmailIcon from "../../../Images/Help/CustomerEmail.png";
import FeaturedArticles from "../../../Images/Help/FeatureIcon.svg";
import CustomerIcon from "../../../Images/Help/Customer.png";
import QuestionIcon from "../../../Images/Help/Questionmark.png";
import AvatarIcon from "../../../Images/Help/Avatar.png";
import { useEffect } from "react";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import { useDispatch } from "react-redux";

const Help = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Help | The Capital Hub";
    dispatch(setPageTitle("Help"));
  }, []);
  return (
    <MaxWidthWrapper>
      <div className="help_main_container">
        <div className="row mt-2">
          <div className="col">
            <SmallProfileCard text={"Help"} />
            <div className="content-70">
              <div className="row">
                <div className="col-12 mt-2">
                  <div className="box_container">
                    <div className="helpcenter">
                      <img src={HelpIcon} alt="Help Icon" />
                      <h6>HelpCenter</h6>
                    </div>
                    <section className="how_can_we_help">
                      <div className="title_input">
                        <h1 className="centered-text">
                          Hello, how can we help ?
                        </h1>
                        <div className="search-container">
                          <img src={SearchIcon} alt="svg" />
                          <input type="text" placeholder="Ask a question..." />
                          <button className="search-button">Search</button>
                        </div>
                      </div>
                    </section>
                    <h6 className="small_text">
                      Or choose a category to quickly find the help you need
                    </h6>
                    <section class="card-section">
                      <div class="card">
                        <img src={CustomerIcon} alt="text" />
                        <p>Contact us</p>
                      </div>
                      <div class="card">
                        <img src={EmailIcon} alt="text" />
                        <p>Mail us</p>
                      </div>
                      <div class="card">
                        <img src={AvatarIcon} alt="text" />
                        <p>Account, Profile and Network</p>
                      </div>
                      <div class="card">
                        <img src={QuestionIcon} alt="text" />
                        <p>Get Help</p>
                      </div>
                    </section>
                    <div className="helpcenter">
                      <img src={FeaturedArticles} alt="Help Icon" />
                      <h6>Featured Articles</h6>
                    </div>
                    <section className="accordion_section">
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingOne"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              Coming soon...
                              {/* Guide: How to use customer relationship management */}
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              This feature is coming soon.
                              {/* Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed non arcu aliquet, tristique tellus ac,
                              cursus quam. Cras vel purus quis nulla malesuada
                              posuere. Nullam a eros a felis fringilla gravida eu
                              et turpis. Praesent eu tellus nec arcu sagittis
                              gravida in eget erat. */}
                            </div>
                          </div>
                        </div>
                        {/* <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              Guide: How to use Team relationship management
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed non arcu aliquet, tristique tellus ac,
                              cursus quam. Cras vel purus quis nulla malesuada
                              posuere. Nullam a eros a felis fringilla gravida eu
                              et turpis. Praesent eu tellus nec arcu sagittis
                              gravida in eget erat.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingThree"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              Guide: How to use Investor relationship management
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed non arcu aliquet, tristique tellus ac,
                              cursus quam. Cras vel purus quis nulla malesuada
                              posuere. Nullam a eros a felis fringilla gravida eu
                              et turpis. Praesent eu tellus nec arcu sagittis
                              gravida in eget erat.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingThree"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              Guide: How to use Investor relationship management
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed non arcu aliquet, tristique tellus ac,
                              cursus quam. Cras vel purus quis nulla malesuada
                              posuere. Nullam a eros a felis fringilla gravida eu
                              et turpis. Praesent eu tellus nec arcu sagittis
                              gravida in eget erat.
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Help;
