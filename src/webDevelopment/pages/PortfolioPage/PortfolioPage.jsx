import React from "react";
import "./PortfolioPage.scss";
import assets from "../../../Images/Portfolio/PortfolioPage";

function PortfolioPage() {
  return (
    <div className="PortfolioPage_page px-3">
      <div className="top_section ">
        <div className="box box_one ">
          <img src={assets.impactshall} alt="impactshall" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            porro, praesentium placeat quod sit provident, ad quisquam dolore
            maiores expedita incidunt molestiae animi, harum consectetur ea
            pariatur similique exercitationem ut?
          </p>
        </div>
        <div className="box box_two">
        <img src={assets.capitalHub} alt="capitalHub" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            porro, praesentium placeat quod sit provident, ad quisquam dolore
            maiores expedita incidunt molestiae animi, harum consectetur ea
            pariatur similique exercitationem ut?
          </p>
        </div>
        <div className="box box_three ">
        <img src={assets.yesgobus} alt="yesgobus" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            porro, praesentium placeat quod sit provident, ad quisquam dolore
            maiores expedita incidunt molestiae animi, harum consectetur ea
            pariatur similique exercitationem ut?
          </p>
        </div>
        <div className="box box_four">
        <img src={assets.circleIcon} alt="circleIcon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            porro, praesentium placeat quod sit provident, ad quisquam dolore
            maiores expedita incidunt molestiae animi, harum consectetur ea
            pariatur similique exercitationem ut?
          </p>
        </div>
        <div className="box box_five">
        <img src={assets.impactshall} alt="impactshall" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            porro, praesentium placeat quod sit provident, ad quisquam dolore
            maiores expedita incidunt molestiae animi, harum consectetur ea
            pariatur similique exercitationem ut?
          </p>
        </div>
        <div className="box box_six">
        <img src={assets.capitalHub} alt="capitalHub" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            porro, praesentium placeat quod sit provident, ad quisquam dolore
            maiores expedita incidunt molestiae animi, harum consectetur ea
            pariatur similique exercitationem ut?
          </p>
        </div>
      </div>
      <div className="botton_section d-flex flex-column justify-content-center  ">
        <h1>670 companies. 4,773 jobs.It's <br /> time to build.</h1>
        <p>Looking for your next startup adventure?</p>
        <button className="px-3 py-2">Start your search</button>
      </div>
    </div>
  );
}

export default PortfolioPage;
