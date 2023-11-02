import {
    AppStore,
    Avoidance,
    CompanyBG,
    CostSaving,
    Diversify,
    FinancialOrg,
    FinancialPlanner,
    GooglePlayStore,
    ImprovedCredit,
    InsureRight,
    IntroGetLoan,
    IntroMain,
    InvestEasy,
    JoinUs,
    ManageYourFinance,
    TeamExp,
    UniqueFeatures,
  } from "../../../../Images/Ecommerace/FtechlandingPage";
  import "./FtechLandingPage.scss";
  import { Helmet } from 'react-helmet';
  import { Link } from "react-router-dom";
  import pramodImg from '../../../../Images/aboutUs/Pramod.jpeg'

  
  function FtechLandingPage() {
    return (
      <section className="landing-page container-fluid">
        <Helmet>
        <meta charSet="utf-8" />
        <title> Build your FinTech application with Capital HUB!


</title>
        <meta name="description" content=": Experience hassle-free financial management with our fintech solutions.
Say goodbye to the stress of making loan payments on time and join our community for
financial ease and security" />
      </Helmet>
        <section className="intro">
          <h1 className="h1">
            <span className="blue"> Build your FinTech application with Capital HUB!

</span>
            {/* <span className="orange">, for you</span> */}
          </h1>
          <p className="text-center my-2 my-lg-4">
          Build your business as Capital HUB builds your application.

          </p>
          <div className="intro-main-img">
            <img src={IntroMain} alt="introduction image" className="mx-auto" />
            <img src={IntroGetLoan} alt="get a loan" className="mx-auto mb-5" />
          </div>
          <div className="short-description">
            <h2>
              <span className="blue">
              Pay your development fee in tranches


              </span>
              {/* <span className="orange"> loan payments on time !</span> */}
            </h2>
            <p className="text-center my-2 my-lg-4">
            Capital HUB supports the startup ecosystem by accepting payment in tranches of three. Final payment is made only after the product is complete.

            </p>
          </div>
          <div className="feature-cards flex-column flex-md-row">
            <div className="feature-card">
              <img src={InsureRight} alt="Insure Right" />
              <h6>Simple Landing Page
</h6>
              <p>₹15,000 - ₹30,000* 
</p>
            </div>
            <div className="feature-card">
              <img src={Diversify} alt="Diversify Well" />
              <h6> Full-Fledged web application
</h6>
              <p>₹50,000 - ₹2,00,000*
</p>
            </div>
            <div className="feature-card">
              <img src={InvestEasy} alt="Invest Easy" />
              <h6>Web application plus mobile application</h6>
              <p>₹2,00,000 - ₹5,00,000*
</p>
            </div>
          </div>
        </section>
  
        <section className="financial-planner row justify-content-center justify-content-md-around">
          <div className="col-md-7">
            <h3 className="mb-4">
              <span className="blue">Features that can be provided in the application</span>
              {/* <span className="orange"> financial planner</span> */}
            </h3>
            {/* <h4>Here is why we can help you</h4> */}
            <div className="helping-bullets">
              <div className="helping-bullet">
                <div className="img">
                  <img src={CompanyBG} alt="Company Background" />
                </div>
                <p> Credit-score tracking
.</p>
              </div>
              <div className="helping-bullet">
                <div className="img">
                  <img src={TeamExp} alt="Team Experience" />
                </div>
                <p>
                Payment gateway integration
.
                </p>
              </div>
              <div className="helping-bullet">
                <div className="img">
                  <img src={UniqueFeatures} alt="Unique Features" />
                </div>
                <p>
                Multi-factor authentication.
                </p>
              </div>
            </div>
          </div>
          <div className="img col-8 col-md-3">
            <img src={FinancialPlanner} alt="Financial Planner" height={400} />
          </div>
        </section>
  
        <section className="how-we-help">
          <h2 className="blue">Here's how we build your project</h2>
          <div className="help-cards">
            <div className="help-card">
              <p className="count">01.</p>
              <h6 className="title">Regular updates from our Product Manager</h6>
              {/* <p>
                Explain how your company provides a centralized platform to track
                and manage all EMIs.
              </p> */}
              {/* <button>Learn More</button> */}
              <Link to="/web-development" className="LinkBtn">Taking Us</Link>
            </div>
            <div className="help-card">
              <p className="count">02.</p>
              <h6 className="title">Technical recommendation from core team
</h6>
              {/* <p>
                Emphasize the benefit of receiving timely alerts for due dates,
                payment reminders, and any changes in terms or interest rates.
              </p> */}
              {/* <button>Learn More</button> */}
              <Link to="/web-development" className="LinkBtn">Taking Us</Link>
            </div>
            <div className="help-card">
              <p className="count">03.</p>
              <h6 className="title">Specialised and unique startup business consulting
</h6>
              {/* <p>0 Interest loans, to help you repay loans on time</p> */}
              {/* <button className="btn">Learn More</button> */}
              <Link to="/web-development" className="LinkBtn">Taking Us</Link>
            </div>
          </div>
        </section>
  
        <section className="join-us">
          <div className="header row justify-content-between align-items-center">
            <div className="short-details col-md-5 text-white">
              <h2>
                <span>Be part of the Capital Hub Platform</span>
                {/* <span className="light-orange"> EMI problems again!</span> */}
              </h2>
              <p>
              Working with Capital Hub gives you access to a community of 30+ startup founders and 80+ angel investors to boost your network launch your startup ahead.
              </p>
            </div>
            <div className="img-container col-md-4">
              <img className="mx-auto" src={JoinUs} alt="Join Us" />
            </div>
          </div>
          <div className="join-us-cards">
            {/* <div className="join-us-card rounded-4">
              <img
                className="rounded"
                src={FinancialOrg}
                width={300}
                alt="Financial Organisation"
              />
              <div className="p-3">
                <h6>Financial Organisation</h6>
                <p className="fs-14">
                  Never have to worry about tracking and planning your EMIs and
                  finances by yourself anymore!
                </p>
              
                <Link to="/web-development" className="LinkBtn btn btn-primary rounded-pill text-white px-4 py-1 fs-12">Taking Us</Link>
              </div>
            </div> */}
            {/* <div className="join-us-card rounded-4">
              <img
                className="rounded"
                src={Avoidance}
                width={300}
                alt="Avoidance of missed payments"
              />
              <div className="p-3">
                <h6>Avoidance of missed payments</h6>
                <p className="fs-14">
                  Our 0 interest loans will help you stay ahead of your payments!
                </p>
               
                <Link to="/web-development" className="LinkBtn btn btn-primary rounded-pill text-white px-4 py-1 fs-12">Taking Us</Link>
              </div>
            </div> */}
            {/* <div className="join-us-card rounded-4">
              <img
                className="rounded"
                src={ImprovedCredit}
                width={300}
                alt="Improved credit score"
              />
              <div className="p-3">
                <h6>Improved credit score</h6>
                <p className="fs-14">
                  Ensure your Cibil score is always top-notch, and never have to
                  worry about not being credit-worthy in the future!
                </p>
                <Link to="/web-development" className="LinkBtn btn btn-primary rounded-pill text-white px-4 py-1 fs-12">Taking Us</Link>
              </div>
            </div> */}
            <div className="join-us-card rounded-4">
              <img
                className="rounded"
                src={pramodImg}
                width={400}
                alt="Cost Savings"
              />
              <div className="p-3 ">
                <h6 className="mx-auto">pramod Badiger</h6>
                <p className="fs-14 mx-auto">
                Connect with our expert
                </p>
                {/* <button className="btn btn-primary rounded-pill text-white px-4 py-1 fs-12">
                  Learn More
                </button> */}
                <Link to="https://www.linkedin.com/in/pramod-badiger-a3226618b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="LinkBtn btn btn-primary rounded-pill text-white px-4 py-1 fs-12 mx-auto">Connect</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="trusted-security">
          <h3>
            <span className="blue">Trusted security</span>
            <span className="orange"> measures</span>
          </h3>
          <div className="trapezoid-container row justify-content-center">
            <div className="trapezoid col-md-5 col-lg-4 rounded shadow p-3">
              <i>
                <h4 className="light-blue">Encryption</h4>
                <p>
                  We use the best and most up-to-date encryption measures to
                  ensure top-notch protection of your data
                </p>
              </i>
            </div>
            <div className="trapezoid col-md-5 col-lg-4 rounded shadow p-3">
              <i>
                <h4 className="light-blue">Multi-factor Authentication</h4>
                <p>
                  We use this in parallel with encryption to ensure maximum data
                  protection for our users
                </p>
              </i>
            </div>
          </div>
        </section>
        <section className="mobile-apps row gap-3 flex-column-reverse flex-md-row justify-content-center align-items-center pt-5">
          <img
            className="col-6 col-md-3"
            src={ManageYourFinance}
            alt="Mobile app"
          />
          <div className=" col-md-7 d-flex flex-column gap-2">
            <h2 className="px-3">
              <span className="light-orange">Building your FinTech application is just a call away.
</span>
              {/* <span className="blue"> with us is a tap away</span> */}
            </h2>
            <div className="app-icons d-flex flex-column flex-md-row gap-3 align-items-center">
              {/* <img src={GooglePlayStore} alt="Google Play" height={80} /> */}
              {/* <img src={AppStore} alt="App Store" height={65} /> */}
            </div>
          </div>
        </section>
      </section>
    );
  }
  
  export default FtechLandingPage;
  